package com.cg.springMVCQ4.dao;

import com.cg.springMVC4.model.User;
public interface UserDao 
{
	public int registerUser(User user);
	public String loginUser(User user);
}
