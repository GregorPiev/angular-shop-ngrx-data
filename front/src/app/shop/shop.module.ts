import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';

import { EntityDefinitionService } from '@ngrx/data';
import { shopEntityMetaData } from './shop-entity-metadata';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule
  ]
})
export class ShopModule {

  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(shopEntityMetaData)
  }
}
