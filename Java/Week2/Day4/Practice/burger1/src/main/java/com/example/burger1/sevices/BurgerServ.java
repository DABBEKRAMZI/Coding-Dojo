package com.example.burger1.sevices;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.burger1.models.Burger;
import com.example.burger1.repositories.BurberRepo;

@Service
public class BurgerServ {
	
	private final BurberRepo BurgerRepo;
	
	 public BurgerServ(BurberRepo BurgerRepo) {
	        this.BurgerRepo = BurgerRepo;
	    }
	 
	 public List<Burger> allBurgers(){
		 return BurgerRepo.findAll();
		 
	 }
	 
	 public Burger create(Burger burger) {
		 return BurgerRepo.save(burger);
	 }
	
	

}
