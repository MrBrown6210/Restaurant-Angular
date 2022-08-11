import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureClientListComponent } from './feature-client-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeatureClientListComponent],
  exports: [FeatureClientListComponent],
})
export class FeatureClientListModule {}
