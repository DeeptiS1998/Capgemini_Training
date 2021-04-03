package com.example;


  public class SimpleInterest { 
	  private int principal; 
	  private float rate;
  
	  private int years; 
	  private double interest; 
	  public int getPrincipal() {
  
		  return principal; 
		  }
	  public void setPrincipal(int principal) {
		  this.principal= principal;
		  } 
	  public float getRate() {
		  return rate; 
		  } 
	  public void setRate(float rate) {
		  this.rate = rate; 
		  } 
	  public int getYears() { 
		  return years; 
		  } 
	  public void setYears(int years) { 
		  this.years = years; 
		  }
  
  public double Interest() {
	  interest= (principal*rate*years)/100; 
	  return interest; 
	  }
  }