package org.example.backend.service;

import java.util.List;
import java.util.StringJoiner;
import java.util.stream.Collectors;

import org.example.backend.dto.AllPatientsResponse;
import org.example.backend.dto.PatientRequest;
import org.example.backend.dto.PatientResponse;
import org.example.backend.entity.Doctor;
import org.example.backend.entity.Gender;
import org.example.backend.entity.Patient;
import org.example.backend.entity.User;
import org.example.backend.mapping.MapPatientAndPatientRequest;
import org.example.backend.repo.DoctorRepo;
import org.example.backend.repo.PatientRepo;
import org.example.backend.repo.UserRepo;
import org.example.backend.secuirty.SessionInfo;
import org.example.backend.service.somehow.Cpabe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
    @Autowired
    private PatientRepo patientRepo;
    @Autowired
    private UserService userService;
    @Autowired
    private MapPatientAndPatientRequest mapper;
  
    @Autowired
    private GenderService genderService;
  
    @Autowired
    private Cpabe myabe;

    @Autowired
    private KeyGenerationService keyGenerationService;

    @Autowired
    private Cpabe test;

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private DoctorService doctorService;
    @Autowired
    private SessionInfo sessionInfo;

    public Patient addNewPatient(PatientRequest patientRequest) throws Exception {
        List<User> nurses = userService.findAllByIds(patientRequest.getNurseIds());
        List<Doctor> doctors;
        String defaultPolicy = "role:doctor access:authorized";
        String policy ;
        Gender gender = genderService.findById(patientRequest.getGenderId());
        System.out.println("wowowowowowo");
        System.out.println(gender.getName());
        Patient patient = new Patient();
        System.out.println("IDyouneed:");
        String thirdNode = "patient:"+ patient.getUniqueId();
        System.out.println(patient.getUniqueId());
        patient.setGender(gender);
        patient.setNurse(nurses);
        if(patientRequest.getDoctorIds().size() == 1 && patientRequest.getDoctorIds().get(0).equals(-1L))
        {
            System.out.println(patientRequest.getDoctorIds());
            System.out.println("for all doctors");
            doctors = doctorRepo.findAll();
            policy = defaultPolicy+ " 2of2";
        }
        else if(patientRequest.getDoctorIds().size() == 1 && patientRequest.getDoctorIds().get(0).equals(-2L))
        {
            policy = defaultPolicy + " " +"Dep:Cardiology"+" "+ "3of3";
        }
        else if(patientRequest.getDoctorIds().size() == 1 && patientRequest.getDoctorIds().get(0).equals(-3L))
        {    
            policy = defaultPolicy + " " +"Dep:Neurology"+" "+ "3of3";
        }
        else if(patientRequest.getDoctorIds().size() == 1 && patientRequest.getDoctorIds().get(0).equals(-4L))
        {
            policy = defaultPolicy + " " +"Dep:Oncology"+" "+ "3of3";
        }
        else
        {
            doctors = doctorRepo.findAllByUserIdIn(patientRequest.getDoctorIds());
            policy = defaultPolicy + " " +thirdNode +" "+ "3of3";
            for(Doctor doctor : doctors)
            {
                doctor.appendAttributes(thirdNode);
                doctor.setPrv_key(keyGenerationService.keygen(doctor.getPrv_key(), doctor.getDoctorAttributes()));
            }
        }
        System.out.println(policy);
        System.out.println("Doctor IDs: " + patientRequest.getDoctorIds());
        for (Object id : patientRequest.getDoctorIds()) {
            System.out.println("Type of ID: " + id.getClass().getSimpleName() + ", Value: " + id);
        }
        mapper.mapPatientRequestIntoPatient(patientRequest, patient);
        test.enc(patient, keyGenerationService.getPubfile(), policy , patient.getSensitiveData());
        System.out.println("critical:+++++++++++++++++++");
        System.out.println(patient.getSensitiveData());
        System.out.println("patient added"+ patient.getSymptomSummary());
        return patientRepo.save(patient);
    }

    public static String convertLongListToString(List<Long> longList) {
        StringJoiner joiner = new StringJoiner(",");
        longList.forEach(value -> joiner.add(String.valueOf(value)));
        return joiner.toString();
    }

    public Long countPatients(){
        return patientRepo.count();
    }

    public List<PatientResponse> findAllPatient() {
        List<Patient> patients = patientRepo.findAll();
        return  patients.stream()
                .map(p -> new PatientResponse(p.getId(),
                        p.getFirstName(),
                        p.getLastName(),
                        p.getGender().getName())
                )
                .collect(Collectors.toList());
    }

    public AllPatientsResponse findById(Long id) throws Exception {
    Patient patient = patientRepo.findById(id).orElseThrow(()-> new Exception("There Is No Patient With This Id"));
    Doctor doctor = doctorService.findByUserId(sessionInfo.getUser().getId());
    System.out.println(doctor.getDoctorAttributes());
    String s = myabe.dec(keyGenerationService.getPubfile(), doctor.getPrv_key(), patient.getEncryptedData());

    System.out.println(patient.getEncryptedData());
    System.out.println("????????????????????????????????");
    System.out.println(doctor.getPrv_key());
    System.out.println(s);
    String respone = patient.getNormalData()+","+s;
    System.out.println(respone);
    AllPatientsResponse allPatientsResponse = doctorService.MapTheStringIntoAllPatientResponse(respone);
    return allPatientsResponse;
    }
}

