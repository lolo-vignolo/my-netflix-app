import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMoviesComponent } from './for-movies.component';

describe('ForMoviesComponent', () => {
  let component: ForMoviesComponent;
  let fixture: ComponentFixture<ForMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForMoviesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
