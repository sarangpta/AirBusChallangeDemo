import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  
  id: number;
  product: Product;
   
  constructor(
    public productService: ProductService
   ) { }
  
  ngOnInit(): void {
    this.productService.getProductData().subscribe(data=>{
      this.product = data;
    });
  }
}
