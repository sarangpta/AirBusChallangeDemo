package com.air.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.air.demo.exception.RecordNotFoundException;
import com.air.demo.model.Product;
import com.air.demo.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ProductController {

	@Autowired
	ProductService service;

	@GetMapping("/")
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> list = service.getAllProducts();

		return new ResponseEntity<List<Product>>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@PostMapping("/getProductByCategory")
	public ResponseEntity<List<Product>> getProductByCategory(@RequestBody String category)
			throws RecordNotFoundException {
		List<Product> listByCategory = service.getProductByCategory(category);
		return new ResponseEntity<List<Product>>(listByCategory, new HttpHeaders(), HttpStatus.OK);
	}

	@PostMapping("/addProduct")
	public ResponseEntity<Product> saveProduct(@RequestBody Product product) throws RecordNotFoundException {
		Product saved = service.saveProduct(product);
		return new ResponseEntity<Product>(saved, new HttpHeaders(), HttpStatus.OK);
	}

	@PutMapping("/updateProduct")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product) throws RecordNotFoundException {
		Product updated = service.updateProduct(product);
		return new ResponseEntity<Product>(updated, new HttpHeaders(), HttpStatus.OK);
	}

}
