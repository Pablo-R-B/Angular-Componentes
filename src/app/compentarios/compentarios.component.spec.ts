import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompentariosComponent } from './compentarios.component';

describe('CompentariosComponent', () => {
  let component: CompentariosComponent;
  let fixture: ComponentFixture<CompentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompentariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
