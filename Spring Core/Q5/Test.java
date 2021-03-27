package org.q5;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class Test {
 
    @SuppressWarnings("resource")
    public static void main(String[] args) {
    	
        ApplicationContext ac = new ClassPathXmlApplicationContext("Q5.xml");
 
        Employee emp = ac.getBean("myemployee", Employee.class);
        System.out.println(emp.toString());
    }
}
