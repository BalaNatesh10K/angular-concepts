import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunRoutingComponent } from './run-routing.component';

describe('RunRoutingComponent', () => {
  let component: RunRoutingComponent;
  let fixture: ComponentFixture<RunRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
