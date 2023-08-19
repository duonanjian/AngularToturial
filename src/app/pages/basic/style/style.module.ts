import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleComponent } from './style.component';
import { FormatDataPipe } from 'src/pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StyleComponent,FormatDataPipe]
})
export class StyleModule { }
