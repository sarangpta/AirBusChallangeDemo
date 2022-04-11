import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: Product[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getPrductData();
  }

  getPrductData(){
    this.productService.getAll().subscribe((data: Product[]) => {
      this.posts = data;
    });
  }

  sendProductData(product: Product) {
    this.productService.setProductData(product);
  }

  applyFilterName(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {
   this.getPrductData();
    } else {
       this.posts = this.posts.filter((product) => 
                        product.name.toLowerCase().includes(filterValueLower));
    }
  }

  applyFilterCategory(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {
      this.getPrductData();
    } else {
       this.posts = this.posts.filter((product) => 
                        product.category.toLowerCase().includes(filterValueLower));
    }
  }

  applyFilterDescription(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {
      this.getPrductData();
    } else {
       this.posts = this.posts.filter((product) => 
                        product.description.toLowerCase().includes(filterValueLower));
    }
  }

  applyFilterUnits(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {
      this.getPrductData();
    } else {
       this.posts = this.posts.filter((product) => 
                        product.units.toLowerCase().includes(filterValueLower));
    }
  }

}
