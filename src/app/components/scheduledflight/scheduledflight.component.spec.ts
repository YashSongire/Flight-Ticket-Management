import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledflightComponent } from './scheduledflight.component';

describe('ScheduledflightComponent', () => {
  let component: ScheduledflightComponent;
  let fixture: ComponentFixture<ScheduledflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduledflightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
