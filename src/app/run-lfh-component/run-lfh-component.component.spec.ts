import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunLfhComponentComponent } from './run-lfh-component.component';

describe('RunLfhComponentComponent', () => {
  let component: RunLfhComponentComponent;
  let fixture: ComponentFixture<RunLfhComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunLfhComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunLfhComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
