import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpEditMessageComponent } from './help-edit-message.component';

describe('HelpEditMessageComponent', () => {
  let component: HelpEditMessageComponent;
  let fixture: ComponentFixture<HelpEditMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpEditMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpEditMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
