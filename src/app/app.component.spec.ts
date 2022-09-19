import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { render, fireEvent } from '@testing-library/angular';
import { screen } from '@testing-library/dom';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('Counter', () => {
  test('should render counter', async () => {
    await render(AppComponent, {
      componentProperties: { counter: 5 },
    });

    expect(screen.getByText('Current Count: 5')).toBeInTheDocument();
  });
});
