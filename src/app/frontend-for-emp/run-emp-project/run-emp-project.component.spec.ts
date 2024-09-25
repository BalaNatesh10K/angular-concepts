import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunEmpProjectComponent } from './run-emp-project.component';

describe('RunEmpProjectComponent', () => {
  let component: RunEmpProjectComponent;
  let fixture: ComponentFixture<RunEmpProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunEmpProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunEmpProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
