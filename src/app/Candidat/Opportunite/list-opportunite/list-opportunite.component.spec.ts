import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpportuniteComponent } from './list-opportunite.component';

describe('ListOpportuniteComponent', () => {
  let component: ListOpportuniteComponent;
  let fixture: ComponentFixture<ListOpportuniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOpportuniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
