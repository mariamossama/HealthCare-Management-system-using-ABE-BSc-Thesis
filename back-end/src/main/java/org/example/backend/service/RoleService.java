package org.example.backend.service;


import org.example.backend.entity.Role;
import org.example.backend.entity.User;
import org.example.backend.repo.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public Role findById(Long id) throws Exception {
        return roleRepository.findById(id).orElseThrow(() -> new Exception("There Is No Role with THis Id"));
    }

    public List<Role> getAllOperationalRoles() {
        List<Long> ids= Arrays.asList(1L, 3L, 5L);
        List<Role> result= roleRepository.findByIdIsNotIn(ids);
        System.out.println(result.get(0));
        return roleRepository.findByIdIsNotIn(ids);
    }

    public Role findByName(String name)throws Exception{
        return roleRepository.findByName(name).orElseThrow(()-> new Exception("There Is No Role With This Name"));
    }

    public Long countByName(String name){
        return countByName(name);
    }
}
