import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DropdownModule} from 'primeng/dropdown';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {AnimateModule} from 'primeng/animate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import { Modal1Component } from './modal/modal1/modal1.component';
import {CardModule} from 'primeng/card';
import { EducationComponent } from './education/education.component';
import { WorksComponent } from './works/works.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { DialogFruitshopComponent } from './dialog-fruitshop/dialog-fruitshop.component';
import { DialogRiseComponent } from './dialog-rise/dialog-rise.component';
import { DialogBreefComponent } from './dialog-breef/dialog-breef.component';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    Modal1Component,
    EducationComponent,
    WorksComponent,
    DialogFruitshopComponent,
    DialogRiseComponent,
    DialogBreefComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    InputTextModule,
    DialogModule,
    AnimateModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    CardModule,
    FontAwesomeModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
