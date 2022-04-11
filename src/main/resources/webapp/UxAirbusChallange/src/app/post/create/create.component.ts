import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
   
  constructor(
    public productService: ProductService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', Validators.required),
      description: new FormControl(''),
      units: new FormControl('', [Validators.required]),
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    this.productService.create(this.form.value).subscribe(res => {
         alert('Product created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
  

}
