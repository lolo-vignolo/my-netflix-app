import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTVshowsComponent } from './for-tvshows.component';

describe('ForTVshowsComponent', () => {
  let component: ForTVshowsComponent;
  let fixture: ComponentFixture<ForTVshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForTVshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTVshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
