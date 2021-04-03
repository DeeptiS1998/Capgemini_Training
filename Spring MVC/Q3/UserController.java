package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller 
public class UserController {
	@RequestMapping(value = "/login",method = RequestMethod.GET)
	public ModelAndView getValues(){		
		ModelAndView mv =new ModelAndView("login");
		return mv;
	}
	
	@RequestMapping(value = "/success1", method = RequestMethod.POST) 
	   public ModelAndView showValue(@ModelAttribute("lo") UserModel lo) {
		
			if(lo.getUsername()=="John" && lo.getPassword()=="doe")
			{
				
				ModelAndView mv =new ModelAndView("success");
				System.out.println(lo.getUsername());
				return mv;
				
			}
			
		ModelAndView mv =new ModelAndView("error");
		return mv;
	}
}