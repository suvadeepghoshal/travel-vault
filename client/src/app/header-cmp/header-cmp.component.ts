import { Component } from '@angular/core';
import { ViewObject } from 'src/models/viewObject';
import { ViewObject_T } from 'src/models/viewObjectType';

@Component({
  selector: 'app-header-cmp',
  templateUrl: './header-cmp.component.html',
  styleUrls: ['./header-cmp.component.css'],
})
export class HeaderCmpComponent extends ViewObject {
  brand: ViewObject_T; // brand details on the header
  codeSource: ViewObject_T; // source details on the header

  getBrand(): ViewObject_T {
    let viewObject = new ViewObject();
    viewObject.title = 'TRAVEL VAULT';
    viewObject.href = '/';
    return viewObject;
  }

  getCodeSource(): ViewObject_T {
    let viewObject = new ViewObject();
    viewObject.title = 'Source';
    viewObject.href = 'https://github.com/suvadeepghoshal/travel-vault';
    return viewObject;
  }

  constructor() {
    super();
    this.brand = this.getBrand();
    this.codeSource = this.getCodeSource();
  }
}
