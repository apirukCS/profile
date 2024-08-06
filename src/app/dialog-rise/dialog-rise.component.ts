import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-rise',
  templateUrl: './dialog-rise.component.html',
  styleUrls: ['./dialog-rise.component.css']
})
export class DialogRiseComponent {
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

  products =  [
    {'image' : 'Screenshot_20230127_100759_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101254_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101259_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101303_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101330_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_100820_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_100859_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_100921_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_100929_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101036_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101039_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101054_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101106_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101116_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101123_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101127_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101135_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101144_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101151_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101154_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101200_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101203_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101208_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101216_com.example.orders.jpg'},
    {'image' : 'Screenshot_20230127_101233_com.example.orders.jpg'}
  ];
}
