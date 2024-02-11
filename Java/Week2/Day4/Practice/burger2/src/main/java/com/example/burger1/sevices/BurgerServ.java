package com.example.burger1.sevices;

import java.util.List;
import java.util.Optional;

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
	 
	 public Burger findBurgerById(Long id) {
		 Optional<Burger> burger=BurgerRepo.findById(id);
		 if (burger.isPresent()) return burger.get();
		 else return null;
	 }
	 
	 public Burger update(Burger burger) {
		 return BurgerRepo.save(burger);
	 }
	

}
