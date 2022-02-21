package com.app.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DataNotFoundException extends Exception{

    private static final long serialVersionUID = -5482797810128815167L;

    public DataNotFoundException(String message) {
        super(message);
    }
}
