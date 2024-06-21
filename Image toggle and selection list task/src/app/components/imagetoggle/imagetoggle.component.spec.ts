import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetoggleComponent } from './imagetoggle.component';

describe('ImagetoggleComponent', () => {
  let component: ImagetoggleComponent;
  let fixture: ComponentFixture<ImagetoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagetoggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
