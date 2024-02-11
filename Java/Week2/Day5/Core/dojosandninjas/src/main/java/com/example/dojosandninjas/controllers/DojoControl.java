package com.example.dojosandninjas.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.dojosandninjas.models.Dojo;
import com.example.dojosandninjas.models.Ninja;
import com.example.dojosandninjas.services.DojoServ;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoControl {

	
	@Autowired
	private DojoServ dojoServ;
	
	@GetMapping("/new")
	public String showcreate(@ModelAttribute Dojo dojo) {
		return "dojocreate.jsp";
	}
	@PostMapping("/new")
	public String create(@Valid @ModelAttribute Dojo dojo, BindingResult result) {
		if (result.hasErrors()) return "dojocreate.jsp";
		else {
			dojoServ.create(dojo);
			return "redirect:/ninjas/new";
		}
		
	}
	
	@GetMapping("/{id}")
	public String showDojoNinjas(@PathVariable("id") Long id,Model model) {
		Dojo dojo= dojoServ.dojoById(id);
		List<Ninja> dojoNinjas=dojo.getDojoNinjas();
		model.addAttribute("dojo",dojo);
		model.addAttribute("dojoNinjas",dojoNinjas);
		return "dojo.jsp";
		
	}
}
