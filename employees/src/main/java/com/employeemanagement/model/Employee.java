package com.employeemanagement.model;


import jakarta.validation.constraints.Email;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "employees")  // Corrected collection name
public class Employee {

    @Id
    private String id;

    private String name;

    private String email;

    private String location;
}