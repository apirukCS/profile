import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  isShowDialogFruitShop = false;
  isShowDialogRise = false;
  isShowDialogBreef = false;

  position = 'bottom';

  changeStatusFruitShop(){
    this.isShowDialogFruitShop = true;
  }
  changeStatusRise(){
    this.isShowDialogRise = true;
  }
  changeStatusBreef(){
    this.isShowDialogBreef = true;
  }
}
