package org.example.backend.handler;

public class WrongUserNameOrPasswordException extends Exception{
    public WrongUserNameOrPasswordException(){
        super();
    }

    public WrongUserNameOrPasswordException(String message) {
        super(message);
    }
}


