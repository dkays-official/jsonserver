import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotewrapperComponent } from './notewrapper.component';

describe('NotewrapperComponent', () => {
  let component: NotewrapperComponent;
  let fixture: ComponentFixture<NotewrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotewrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotewrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
