package com.example.burger1.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.burger1.models.Burger;

public interface BurberRepo extends CrudRepository<Burger, Long> {
	List<Burger> findAll();

}
