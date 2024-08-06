import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-fruitshop',
  templateUrl: './dialog-fruitshop.component.html',
  styleUrls: ['./dialog-fruitshop.component.css']
})
export class DialogFruitshopComponent {
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
    {'image' : 'Screenshot_20230126_155130_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155132_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155214_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155222_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155231_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155256_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155337_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155420_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155452_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155455_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155544_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155603_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155623_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155631_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155637_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155639_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155659_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155704_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155713_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155719_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155747_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155754_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155756_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155803_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155809_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155812_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_155836_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_161107_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_161336_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_161357_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_161402_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_161411_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_161419_com.example.uixd.jpg'},
    {'image' : 'Screenshot_20230126_161447_com.example.uixd.jpg'}
  ];
}
