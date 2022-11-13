import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesOpportuniteComponent } from './mes-opportunite.component';

describe('MesOpportuniteComponent', () => {
  let component: MesOpportuniteComponent;
  let fixture: ComponentFixture<MesOpportuniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesOpportuniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
