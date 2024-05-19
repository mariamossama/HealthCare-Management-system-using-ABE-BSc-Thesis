package org.example.backend.service;

import java.util.List;

import org.example.backend.entity.Department;
import org.example.backend.repo.DepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.lang.Arrays;

@Service
public class DepartmentService {
    @Autowired
    private DepartmentRepo departmentRepo;

    public Department findById(Long id) throws Exception {
        return departmentRepo.findById(id).orElseThrow(()-> new Exception(("There Is No Department With This id")));
    }


    public List<Department> getAllDepartments() {
        List<Department> res = departmentRepo.findAll();
        System.out.println("omgomg");
        System.out.println(res.get(0).getDepartmentName());
        return res;
    }
 
}
