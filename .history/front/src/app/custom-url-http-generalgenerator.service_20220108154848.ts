import { Injectable } from "@angular/core";
import { DefaultDataServiceConfig, DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from "@ngrx/data";

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000',
};

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
      const nRoot = '';
      _root = 'http//localhost:3000';//defaultDataServiceConfig.root as string;
      resourceUrls = {
        entityResourceUrl: `${nRoot}/${entityName}/`,
        collectionResourceUrl: `${nRoot}/${this.myPluralizer.pluralize(entityName)}/`
      };

      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }

    return resourceUrls;
  }
}