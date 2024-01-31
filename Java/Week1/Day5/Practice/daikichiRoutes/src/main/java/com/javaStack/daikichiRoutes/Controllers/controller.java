package com.javaStack.daikichiRoutes.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class controller {
	
	@GetMapping("/daikichi")
	public String welcome() {
		return "Welcome";
	}
	
	@GetMapping("/daikichi/today")
	public String welcome1() {
		return "Today you will find luck in all your endeavors!";
	}
	
	@GetMapping("/daikichi/tomorrow")
	public String welcome2() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
	
}
