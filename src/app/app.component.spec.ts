import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { render, fireEvent } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should be text to equal Current Count: 5', () => {
    component.counter = 5;
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement.query(
      By.css('span')
    );
    const element: HTMLElement = debugElement.nativeElement;
    expect(element.innerHTML).toContain('Current Count: 5');
  });
});

describe('Counter', () => {
  test('should render counter', async () => {
    await render(AppComponent, {
      componentProperties: { counter: 5 },
    });

    expect(screen.getByText('Current Count: 5')).toBeInTheDocument();
  });

  test('should increment the counter on click', async () => {
    await render(AppComponent, {
      componentProperties: { counter: 5 },
    });
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('Current Count: 6')).toBeInTheDocument();
  });
});
