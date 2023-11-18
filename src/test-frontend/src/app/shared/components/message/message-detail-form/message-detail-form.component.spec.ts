import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailFormComponent } from './message-detail-form.component';

describe('MessageDetailFormComponent', () => {
  let component: MessageDetailFormComponent;
  let fixture: ComponentFixture<MessageDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageDetailFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
