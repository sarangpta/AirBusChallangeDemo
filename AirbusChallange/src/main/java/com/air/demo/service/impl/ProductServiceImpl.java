package com.air.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.air.demo.model.Product;
import com.air.demo.repository.ProductRepository;
import com.air.demo.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepository repository;

	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		
		List<Product> products = repository.findAll();
//        
//        if(products.size() > 0) {
//            return products;
//        } else {
//            return new ArrayList<Product>();
//        }
		System.out.println(products);
		return products;
	}

	@Override
	public List<Product> getProductByCategory(String category) {
		// TODO Auto-generated method stub
		return repository.findByCategory(category);
//		return null;
	}

	@Override
	public Product saveProduct(Product product) {
		// TODO Auto-generated method stub
		return repository.save(product);
	}

	
	@Override
	public Product updateProduct(Product product) {
		// TODO Auto-generated method stub
		Product productEntity= repository.findById(product.getProductId()).get();

    if (Objects.nonNull(product.getCategory())
        && !"".equalsIgnoreCase(
            product.getCategory())) {
        productEntity.setCategory(product.getCategory());
    }

    if (Objects.nonNull(product.getName())
            && !"".equalsIgnoreCase(
                product.getName())) {
            productEntity.setName(product.getName());
        }

    if (Objects.nonNull(product.getDescription())
            && !"".equalsIgnoreCase(
                product.getDescription())) {
            productEntity.setDescription(product.getDescription());
        }
    
    if (Objects.nonNull(product.getUnits())
            && !"".equalsIgnoreCase(
                product.getUnits())) {
            productEntity.setUnits(product.getUnits());
        }
    
		return repository.save(product);
	}


}
