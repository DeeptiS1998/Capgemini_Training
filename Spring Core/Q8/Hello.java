package org.q8;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class Hello {
	  @PostConstruct
	    public void init()  
	    { 
	        System.out.println( "Bean HelloWorld has been instantiated --init() method");
	            
	    } 
	    @PreDestroy
	    public void destroy()  
	    { 
	        System.out.println("Conatiner has been closed --destroy() method"); 
	    } 
}
