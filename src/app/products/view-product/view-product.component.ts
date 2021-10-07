import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product!: Product;
  starFull ='★'
  starEmpty = '☆'

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if (data) {
        this.productService.viewProduct(data.id).subscribe(
          (data) => this.product = data
        )
      }
    })
  }

}
