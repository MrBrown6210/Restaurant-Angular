import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopularMenuComponent } from './popular-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PopularMenuComponent],
  exports: [PopularMenuComponent],
})
export class PopularMenuModule {}
