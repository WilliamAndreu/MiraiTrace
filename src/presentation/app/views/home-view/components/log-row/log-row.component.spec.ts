import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRowComponent } from './log-row.component';

describe('LogRowComponent', () => {
  let component: LogRowComponent;
  let fixture: ComponentFixture<LogRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
