package com.air.demo.service;

import java.util.List;

import com.air.demo.model.Product;


public interface ProductService {

	List<Product> getAllProducts();

	List<Product> getProductByCategory(String category);

	Product saveProduct(Product product);
	
	Product updateProduct(Product product);

}
