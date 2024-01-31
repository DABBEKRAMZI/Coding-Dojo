package com.javaStack.daikichiRoutes.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


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
	
	@GetMapping("/daikichi/travel/{city}")
	public String travel(@PathVariable("city") String city) {
		
		return "Congratulations! You will soon travel to "+city ;
	}
	
	@GetMapping("/daikichi/lotto/{number}")
	public String lotto(@PathVariable("number") String number) {
		int n= Integer.parseInt(number);
		
		if (n%2==0) return  "You will take a grand journey in the near future, but be weary of tempting offers" ;
		return  "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends."

 ;
	}
	
	
	
}
