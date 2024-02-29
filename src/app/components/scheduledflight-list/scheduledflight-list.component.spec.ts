import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledflightListComponent } from './scheduledflight-list.component';

describe('ScheduledflightListComponent', () => {
  let component: ScheduledflightListComponent;
  let fixture: ComponentFixture<ScheduledflightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduledflightListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledflightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
