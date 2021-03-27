package org.dp.cg;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		 @SuppressWarnings("resource") 
		  ApplicationContext context = new ClassPathXmlApplicationContext("q1.xml"); 
		  Customer customer=(Customer) context.getBean("Customer"); 
		  customer.details();
	}

}
