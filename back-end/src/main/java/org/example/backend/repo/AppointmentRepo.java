package org.example.backend.repo;

import org.example.backend.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Long> {
    List<Appointment> findByDayAndTimeAndDoctorId(Date day, Date time, Long doctorId);

    List<Appointment> findByDoctorIdAndIsBooked(Long doctorId, Boolean isBooked);
}
