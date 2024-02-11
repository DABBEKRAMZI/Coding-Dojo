package com.example.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dojosandninjas.models.Ninja;
import com.example.dojosandninjas.repositories.NinjaRepo;

@Service
public class NinjaServ {
	
	@Autowired
	NinjaRepo ninjaRepo;
	
	public List<Ninja> allNinjas(){
		return ninjaRepo.findAll();
	}
	
	public Ninja ninjaById(Long id) {
		
		Optional<Ninja> ninja =ninjaRepo.findById(id);
		if (ninja.isPresent()) return ninja.get();
		else return null;
		
	}
	
	public Ninja create(Ninja ninja) {
		
		return ninjaRepo.save(ninja);
	}
	
	

}
