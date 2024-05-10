package org.example.backend.service;

import org.example.backend.dto.AppointmentRequest;
import org.example.backend.entity.Appointment;
import org.example.backend.entity.Gender;
import org.example.backend.entity.User;
import org.example.backend.handler.PreventSaveException;
import org.example.backend.repo.AppointmentRepo;
import org.example.backend.secuirty.SessionInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepo appointmentRepo;
    @Autowired
    private UserService userService;

    @Autowired
    private GenderService genderService;
    @Autowired
    private SessionInfo sessionInfo;

    public Appointment Save(AppointmentRequest appointmentRequest) throws Exception {
        User doctor = userService.findById(appointmentRequest.getDoctorId());
        Gender gender = genderService.findById(appointmentRequest.getGenderId());
        Date appointmentTime = appointmentRequest.getAppointmentDate();
        Date dateOfBirth = appointmentRequest.getDateOfBirth();
        Calendar calendar2 = Calendar.getInstance();
        calendar2.setTime(dateOfBirth);
        calendar2.set(Calendar.SECOND, 0);
        calendar2.set(Calendar.MILLISECOND, 0);
        appointmentRequest.setDateOfBirth(calendar2.getTime());
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(appointmentTime);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        appointmentRequest.setAppointmentDate(calendar.getTime());
        List<Appointment> reservedAppointment = appointmentRepo.findByDayAndTimeAndDoctorId(
                appointmentRequest.getAppointmentDate(),
                appointmentRequest.getAppointmentDate(),
                doctor.getId()
        );
        if(reservedAppointment != null && reservedAppointment.size() > 0){
            throw new PreventSaveException("There Is An Appointment In This Time");
        }
        Appointment appointment = Appointment.builder()
                .email(appointmentRequest.getEmail())
                .name(appointmentRequest.getName())
                .day(appointmentRequest.getAppointmentDate())
                .time(appointmentRequest.getAppointmentDate())
                .doctor(doctor)
                .gender(gender)
                .dateOfBirth(appointmentRequest.getDateOfBirth())
                .isBooked(Boolean.FALSE)
                .medicalHistory(appointmentRequest.getMedicalHistory())
                .build();

        return appointmentRepo.save(appointment);
    }

    public List<Appointment> getDoctorAppointment() {
        return appointmentRepo.findByDoctorIdAndIsBooked(sessionInfo.getUser().getId(), false);
    }

    public Appointment bookAppointment(Long id) throws Exception {
        Appointment appointment = appointmentRepo.findById(id).orElseThrow(()-> new PreventSaveException("There Is No Appointment With This ID"));
        appointment.setIsBooked(Boolean.TRUE);
        return appointmentRepo.save(appointment);
    }
}
