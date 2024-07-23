import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilHeaderComponent } from './mobil-header.component';

describe('MobilHeaderComponent', () => {
  let component: MobilHeaderComponent;
  let fixture: ComponentFixture<MobilHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
