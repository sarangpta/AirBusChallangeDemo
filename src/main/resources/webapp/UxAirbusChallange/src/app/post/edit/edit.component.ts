import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  product: Product;
  form: FormGroup;
  
  constructor(
    public productService: ProductService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.productService.getProductData().subscribe(data=>{
      this.product = data;
    });

    this.form = new FormGroup({
      productId:new FormControl(this.product.productId),
      name: new FormControl(this.product.name, [Validators.required]),
      category: new FormControl(this.product.category, Validators.required),
      description: new FormControl(this.product.description),
      units: new FormControl(this.product.units, [Validators.required]),
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(): void{
    this.productService.update(this.form.value).subscribe(res => {
         alert('Product updated successfully!');
         this.router.navigateByUrl('post/index');
    });
  }
   
}
