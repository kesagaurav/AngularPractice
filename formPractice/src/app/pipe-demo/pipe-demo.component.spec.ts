import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemoComponent } from './pipe-demo.component';

describe('PipeDemoComponent', () => {
  let component: PipeDemoComponent;
  let fixture: ComponentFixture<PipeDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeDemoComponent]
    });
    fixture = TestBed.createComponent(PipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
