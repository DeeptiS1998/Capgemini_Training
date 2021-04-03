package com.example;

  import org.springframework.stereotype.Controller; import
  org.springframework.web.bind.annotation.ModelAttribute; import
  org.springframework.web.bind.annotation.RequestMapping; import
  org.springframework.web.bind.annotation.RequestMethod; import
  org.springframework.web.servlet.ModelAndView;
  
  import com.example.SimpleInterest;
  
  @SuppressWarnings("unused")
  
  @Controller public class SimpleInterestController {
  
  @RequestMapping(value = "/SimpleInterest",method = RequestMethod.GET) public
  ModelAndView getValues(){ 
	  ModelAndView mv =new
	  ModelAndView("SimpleInterest"); 
      return mv; 
  }
  
  
  @RequestMapping(value = "/final", method = RequestMethod.POST) public
  ModelAndView showValue(@ModelAttribute("Si") SimpleInterest Si) 
  {
	  ModelAndView model=new ModelAndView("Final"); 
	  return model; 
  }
  
  }