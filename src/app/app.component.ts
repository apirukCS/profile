import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import AOS from "aos";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myprofile';

  isShowModule1 = false;
  isShowModule2 = false;
  isShowModule3 = false;
  isShowModule4 = false;
  isShowModule5 = false;
  isShowModule6 = false;
  modal = true;

  isOnTapPhone = false;
  isCollapse = false;
  isShowMenuButton = true;
  position = 'top-right';
  phoneNumber = '0654099657';


  ngOnInit() {
    AOS.init({ offset: 100, duration:2500, easing:"ease-out-quad", once:!0 }); window.addEventListener('load', AOS.refresh);
    AOS.refresh();
}

  changeStatusMenuButton(){
    this.isShowMenuButton = !this.isShowMenuButton;
  }

  openDialog(moduleNumber:number){
    if(moduleNumber == 1){
      this.isShowModule1 = true;
    }
    else if(moduleNumber == 2){
      this.isShowModule2 = true;
    }
    else if(moduleNumber == 3){
      this.isShowModule3 = true;
    }
    else if(moduleNumber == 4){
      this.isShowModule4 = true;
    }
    else if(moduleNumber == 5){
      this.isShowModule5 = true;
    }
    else if(moduleNumber == 6){
      this.isShowModule6 = true;
    }
  }

  onTapPhone(){
    this.isOnTapPhone = true;
  }

  copyPhoneNumber(){
    navigator.clipboard.writeText(this.phoneNumber);
    alert("Copied phone number: " + this.phoneNumber);
  }
}
