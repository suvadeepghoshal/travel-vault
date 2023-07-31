import { Component } from '@angular/core';
import { ViewObject } from 'src/models/viewObject';
import { ViewObject_T } from 'src/models/viewObjectType';

@Component({
  selector: 'app-footer-cmp',
  templateUrl: './footer-cmp.component.html',
  styleUrls: ['./footer-cmp.component.css'],
})
export class FooterCmpComponent extends ViewObject {
  footerText: ViewObject_T;

  getFooterText(): ViewObject_T {
    let viewObject = new ViewObject();
    viewObject.title =
      '© ' + new Date().getFullYear() + ' Travel Vault. All rights reserved.';
    return viewObject;
  }

  constructor() {
    super();
    this.footerText = this.getFooterText();
  }
}
