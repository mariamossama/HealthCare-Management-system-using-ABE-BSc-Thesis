package org.example.backend.service;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.example.backend.dto.AllPatientsResponse;
import org.example.backend.entity.Doctor;
import org.example.backend.entity.User;
import org.example.backend.repo.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepo doctorRepo;
    @Autowired
    private ABEService abeService;
    public List<AllPatientsResponse> findDoctorPatient() throws Exception {
        List<AllPatientsResponse> allPatientsResponses = new ArrayList<>();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Doctor doctor = findByUserId(user.getId());
        Map<String, String> doctorAttributes = new HashMap<>();
        doctorAttributes.put("role", "doctor");
        for(int i = 0; i < doctor.getPatients().size(); i++){
            byte[] encryptedData = doctor.getPatients().get(i).getEncryptedData();
            //abeService.validateAccessibility(encryptedData, doctorAttributes, doctor.getDecryptionKey());
            String s = new String(encryptedData, StandardCharsets.UTF_8);
            allPatientsResponses.add(MapTheStringIntoAllPatientResponse(s));
        }
        return allPatientsResponses;
    }

    public AllPatientsResponse MapTheStringIntoAllPatientResponse(String s) {
        AllPatientsResponse allPatientsResponse = new AllPatientsResponse();
        allPatientsResponse.setFirstName(extractValue(s, "firstName"));
        allPatientsResponse.setLastName(extractValue(s, "lastName"));
        allPatientsResponse.setDateOfBirth(extractValue(s, "DOB"));
        allPatientsResponse.setMedicalHistory(extractValue(s, "medicalHistory"));
        allPatientsResponse.setSymptomSummary(extractValue(s, "symptoms"));
        allPatientsResponse.setCurrentDiagnosis(extractValue(s, "diagnosis"));
        return allPatientsResponse;
    }
    
    public static String extractValue(String input, String key) {
        String patternString = Pattern.quote(key) + ":(.+?)(?:,|$)";
        Pattern pattern = Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(input);
        if (matcher.find()) {
            return matcher.group(1).trim();
        }
        return null;
    }

    public Doctor findById(Long id) throws Exception {
        return doctorRepo.findById(id).orElseThrow(()->new Exception("There Is No Doctor With This Id"));
    }

    public Doctor findByUserId(Long id) throws Exception {
        return doctorRepo.findByUserId(id).orElseThrow(()-> new Exception("There Is No User With This Id"));
    }

    public List<Doctor> getAllDoctors() throws Exception {
        return doctorRepo.findAll();
    }
    public Object deserializeEncryptedData(byte[] encryptedData) {
        int dataLength = (encryptedData[0] & 0xFF) << 24 | (encryptedData[1] & 0xFF) << 16 |
                (encryptedData[2] & 0xFF) << 8 | (encryptedData[3] & 0xFF);
        byte[] data = new byte[dataLength];
        System.arraycopy(encryptedData, 4, data, 0, dataLength);
        Map<String, String> attributes = new HashMap<>();
        for (int i = 4 + dataLength; i < encryptedData.length; i++) {
            String[] attributeParts = new String(encryptedData, i, encryptedData.length - i).split(":");
            if (attributeParts.length == 2) {
                attributes.put(attributeParts[0], attributeParts[1]);
            }
        }
        Map<String, Object> reconstructedObject = new HashMap<>();
        reconstructedObject.put("data", data);
        reconstructedObject.put("attributes", attributes);
        return reconstructedObject;
    }
}
