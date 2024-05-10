package org.example.backend.service;

import org.example.backend.entity.Gender;
import org.example.backend.repo.GenderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenderService {
    @Autowired
    private GenderRepo genderRepo;

    public List<Gender> getAllGenders(){
        return genderRepo.findAll();
    }

    public Gender findById(Long id) throws Exception {
        return genderRepo.findById(id).orElseThrow(()-> new Exception("There Is No Gender With This Id"));
    }
}
