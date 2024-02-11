package com.example.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dojosandninjas.models.Dojo;
import com.example.dojosandninjas.repositories.DojoRepo;

@Service
public class DojoServ {
	@Autowired
	DojoRepo dojoRepo;
	
	public Dojo create(Dojo dojo) {
		
		return dojoRepo.save(dojo);
	}
	
	public Dojo dojoById(Long id) {
		Optional<Dojo> dojo=dojoRepo.findById(id);
		if (dojo.isPresent()) return dojo.get();
		else return null;
		
	}
	public List<Dojo> dojos(){
		return dojoRepo.findAll();
	}

}
