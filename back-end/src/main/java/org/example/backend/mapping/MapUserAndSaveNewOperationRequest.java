package org.example.backend.mapping;

import org.example.backend.dto.SaveNewOperationRequest;
import org.example.backend.entity.User;
import org.springframework.stereotype.Component;

@Component
public class MapUserAndSaveNewOperationRequest {
    public void MapSaveNewOperationRequestIntoUser(SaveNewOperationRequest saveNewOperationRequest, User user){
        user.setEmail(saveNewOperationRequest.getEmail());
        user.setName(saveNewOperationRequest.getName());
        user.setPhone(saveNewOperationRequest.getPhone());
    }
}
