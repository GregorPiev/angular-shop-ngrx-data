import { Injectable } from "@angular/core";
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from "@ngrx/data";


@Injectable({
  providedIn: 'root',
})

export class CustomUtlHttpGeneralGeneratorService extends DefaultHttpUrlGenerator {

  constructor(private myPluralizer: Pluralizer) {
    super(myPluralizer)
  }

  protected override getResourceUrls(
    entityName: string,
    _root: string): HttpResourceUrls {
    let resourceUrls = this.knownHttpResourceUrls[entityName];

    if (!resourceUrls) {
      const nRoot = 'http//localhost:3000';;
      _root = '';
      resourceUrls = {
        entityResourceUrl: `${nRoot}/${entityName}/`.toLowerCase(),
        collectionResourceUrl: `${nRoot}/${this.myPluralizer.pluralize(
          entityName
        )}/`
      };

      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }

    /* if (entityName == 'Product') {
      const url = 'http//localhost:3000/Products';
      console.log(_root)
      _root = '';
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url,
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    } */

    return resourceUrls;
  }
}