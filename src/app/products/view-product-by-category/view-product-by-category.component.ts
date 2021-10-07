import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  products!: Product[];
  starFull ='★'
  starEmpty = '☆'

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (data) => {
        if (data) {
          this.productService.searchCategoryProduct(data.id).subscribe(
            (data) => this.products = data
          )
        }
      }
    );

  }

}
