import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureClientListComponent } from './feature-client-list.component';

describe('FeatureClientListComponent', () => {
  let component: FeatureClientListComponent;
  let fixture: ComponentFixture<FeatureClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureClientListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
