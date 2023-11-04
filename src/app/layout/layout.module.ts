import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultComponent } from './views/default/default.component';
import { FullWidthComponent } from './views/full-width/full-width.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    FullWidthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    DefaultComponent
  ]
})
export class LayoutModule { }
