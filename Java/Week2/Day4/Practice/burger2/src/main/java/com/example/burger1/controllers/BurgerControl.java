package com.example.burger1.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.burger1.models.Burger;
import com.example.burger1.sevices.BurgerServ;

import jakarta.validation.Valid;

@Controller
public class BurgerControl {
	
	private final BurgerServ burgerService;

	public BurgerControl(BurgerServ burgerService) {
		this.burgerService = burgerService;
	}
	
	@GetMapping("")
	public String index(@ModelAttribute("burger") Burger burger,Model model) {
		
		List<Burger> allBurgers=burgerService.allBurgers();
		
		model.addAttribute("allBurgers",allBurgers);
		return "index.jsp";
	}
	
	@PostMapping("/create")
	public String create(@Valid @ModelAttribute("burger") Burger burger,BindingResult result,
			Model model) {
		if (result.hasErrors()) {
			List<Burger> allBurgers=burgerService.allBurgers();
			
			model.addAttribute("allBurgers", allBurgers);
			return "index.jsp";
		}else {
			Burger newBurger=burgerService.create(burger);
			return "redirect:/";
		}
	}
	
	@GetMapping("/burgers/edit/{id}")
	public String editGet(@PathVariable("id") Long id,Model model) {
		Burger selectedBurger=burgerService.findBurgerById(id);
		model.addAttribute("burger",selectedBurger);
		return "edit.jsp";
	}
	@PutMapping("/burgers/edit/{id}")
	public String editPost(@Valid @ModelAttribute("burger") Burger burger,BindingResult result) {
		if(result.hasErrors()) {
			return "edit.jsp";
		}
		else {
			burgerService.update(burger);
			return "redirect:/";
		}
	}

}
