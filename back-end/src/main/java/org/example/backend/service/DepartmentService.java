package org.example.backend.service;

import org.example.backend.entity.Department;
import org.example.backend.repo.DepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {
    @Autowired
    private DepartmentRepo departmentRepo;

    public Department findById(Long id) throws Exception {
        return departmentRepo.findById(id).orElseThrow(()-> new Exception(("There Is No Department With This id")));
    }
}
