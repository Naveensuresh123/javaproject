package com.ihub.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.model.Employee;
import com.ihub.www.repository.EmployeeRepository;

@Service
public class EmployeeService
{
    @Autowired
    EmployeeRepository employeeRepository;
    
    public List<Employee> getAllEmployee()
    {
    	return employeeRepository.findAll();
    }
    public Employee createEmployee(Employee employee)
    {
    	return employeeRepository.save(employee);
    }
   
    public Employee getEmployeeById(long id)
    {
    	return employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ID Does not Exist"));
    }
    public ResponseEntity<Employee> updateEmployee(long id,Employee employee)
    {
    Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("ID Does not Exist"));
    
      emp.setFirstName(employee.getFirstName());
      emp.setLastName(employee.getLastName()); 
      emp.setEmail(employee.getEmail());
     
      Employee newEmp=employeeRepository.save(emp);
      return ResponseEntity.ok(newEmp);

    }
    public ResponseEntity<HttpStatus> deleteEmployee(long id)
    {
    Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("ID Does not Exist"));
    
     employeeRepository.delete(employee);
     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}