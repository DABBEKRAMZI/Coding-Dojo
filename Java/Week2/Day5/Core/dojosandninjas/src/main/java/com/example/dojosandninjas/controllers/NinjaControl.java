package com.example.dojosandninjas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.dojosandninjas.models.Dojo;
import com.example.dojosandninjas.models.Ninja;
import com.example.dojosandninjas.services.DojoServ;
import com.example.dojosandninjas.services.NinjaServ;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/ninjas")
public class NinjaControl {
	
	@Autowired
	NinjaServ ninjaServ;
	@Autowired
	DojoServ dojoSev;
	
	@GetMapping("/new")
	public String showNinjaCreate(@ModelAttribute Ninja ninja,Model model) {
		List<Dojo> dojos= dojoSev.dojos();
		model.addAttribute("dojos",dojos);
		return "ninjacreate.jsp";
			
	}
	@PostMapping("/new")
	public String createNinja(@Valid @ModelAttribute Ninja ninja,BindingResult result) {
		if (result.hasErrors())return "ninjacreate.jsp";
		else {
			
			ninjaServ.create(ninja);
			long id=ninja.getDojo().getId();
			return "redirect:/dojos/"+id;
		}
	}
	


}
