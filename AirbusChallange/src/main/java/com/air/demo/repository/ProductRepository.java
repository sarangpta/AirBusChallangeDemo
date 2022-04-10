package com.air.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.air.demo.model.Product;
 

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	  @Query("FROM Product WHERE category = ?1")
	  List<Product> findByCategory(String category);
}
