import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-by-category',
  templateUrl: './by-category.component.html',
  styleUrls: ['./by-category.component.css']
})
export class ByCategoryComponent implements OnInit {
  products: Product[];
  categoryList: string[];
  productResultList: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[]) => {
      this.products = data;
      let result = this.products.map(a => a.category);
      this.categoryList = result.filter((x, i, a) => a.indexOf(x) === i);
    });
  }

  getCategoryData(category: string){
     this.productService.getByCategory(category).subscribe(data=>{
       this.productResultList = data;
    });
  }

}
