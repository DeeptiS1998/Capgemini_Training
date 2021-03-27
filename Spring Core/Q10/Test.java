package org.q10;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class Test 
{
    public static void main( String[] args )
    {
    	@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext("q10.xml");
    	Triangle triangle = (Triangle) context.getBean("triangle");
    	triangle.draw();
    }
}