package org.q5;

import javax.annotation.Resource;

public class Employee {
 
    private String id;
    private String name;
 
    @Resource(name="mycompany")
    private Company company;
 
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Company getCompany() {
        return company;
    }
    public void setCompany(Company company) {
        this.company = company;
    }
 
    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", company=" + company.toString() + "]";
    }
}    
