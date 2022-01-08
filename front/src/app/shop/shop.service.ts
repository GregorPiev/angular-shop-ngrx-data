import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { IProductModel } from './products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService extends EntityCollectionServiceBase<IProductModel> {

  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementFactory);
  }
}
