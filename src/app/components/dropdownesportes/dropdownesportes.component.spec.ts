import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownesportesComponent } from './dropdownesportes.component';

describe('DropdownesportesComponent', () => {
  let component: DropdownesportesComponent;
  let fixture: ComponentFixture<DropdownesportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownesportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownesportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
