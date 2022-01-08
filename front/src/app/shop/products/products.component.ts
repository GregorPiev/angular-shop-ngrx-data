import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { IProductModel } from './product.model';
declare var window: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  allProducts$!: Observable<IProductModel[]>;
  productService!: EntityCollectionService<IProductModel>;
  myModel: any;

  productForm: IProductModel = {
    description: '',
    manufacter: '',
    name: '',
    price: 0,
    productId: 0
  }

  modalTitle: string = '';


  constructor(
    entityCollectionServiceFactory: EntityCollectionServiceFactory
  ) {
    this.productService = entityCollectionServiceFactory.create<IProductModel>("Product");
    this.allProducts$ = this.productService.entities$;
  }

  ngOnInit(): void {
    this.productService.getAll();
    this.myModel = new window.bootstrap.Modal(
      document.getElementById('productsModal'),
      {
        keyboard: false
      }
    )
  }

  openModal(productId: number) {
    if (productId == 0) {
      this.modalTitle = 'Add Product';
      this.productForm = {
        description: '',
        manufacter: '',
        name: '',
        price: 0,
        productId: 0
      };
    } else {
      this.modalTitle = 'Add Product';
      this.productService.entities$.subscribe((data) => {
        let filteredProduct = data.filter((item) => item.productId == productId)[0];
        this.productForm = { ...filteredProduct };
      });
    }

    this.myModel.show();
  }

  saveOrUpdate(): void {
    if (this.productForm.productId == 0) {
      this.productService.add(this.productForm).subscribe(item => this.myModel.hide());
    } else {
      this.productService.update(this.productForm)
        .subscribe(item => this.myModel.hide());
    }
  }
  delete(): void {

  }

}
