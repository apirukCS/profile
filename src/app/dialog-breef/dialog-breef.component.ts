import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-breef',
  templateUrl: './dialog-breef.component.html',
  styleUrls: ['./dialog-breef.component.css']
})
export class DialogBreefComponent {
  responsiveOptions;
  constructor(){
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  beef =  [
    {'image' : '1.jpg'},
    {'image' : '2.jpg'},
    {'image' : '3.jpg'},
    {'image' : '4.jpg'},
    {'image' : '5.jpg'},
    {'image' : '6.jpg'},
    {'image' : '7.jpg'},
    {'image' : '8.jpg'},
    {'image' : '9.jpg'},
    {'image' : '10.jpg'},
    {'image' : '11.jpg'},
    {'image' : '12.jpg'},
    {'image' : '13.jpg'},
    {'image' : '14.jpg'},
    {'image' : '15.jpg'},
    {'image' : '16.jpg'},
    {'image' : '17.jpg'},
    {'image' : '18.jpg'},
  ];
}
