import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PasswordValidatorComponent } from './password-validator.component';

describe('PasswordValidatorComponent', () => {
  let component: PasswordValidatorComponent;
  let fixture: ComponentFixture<PasswordValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordValidatorComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit validateChange with TRUE when password input changes with correct input', () => {
    spyOn(component.validateChange, 'emit');

    // Simulate a change in the password input
    component.password = 'MyPassword123';
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.ngOnChanges();

    fixture.detectChanges();

    expect(component.hasMinCharacters).toBe(true);
    expect(component.hasLetterCasing).toBe(true);
    expect(component.hasNoFirstOrLastName).toBe(true);
    expect(component.validateChange.emit).toHaveBeenCalledWith(true);
  });

  it('should emit validateChange with FALSE when the entered password is too short.', () => {
    spyOn(component.validateChange, 'emit');

    component.password = 'Short';
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.ngOnChanges();

    fixture.detectChanges();

    expect(component.hasMinCharacters).toBe(false);
    expect(component.validateChange.emit).toHaveBeenCalledWith(false);
  });

  it('should emit validateChange with FALSE when the entered password lacks casing.', () => {
    spyOn(component.validateChange, 'emit');

    component.password = 'lowercase';
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.ngOnChanges();

    fixture.detectChanges();

    expect(component.hasLetterCasing).toBe(false);
    expect(component.validateChange.emit).toHaveBeenCalledWith(false);
  });

  it('should emit validateChange event with FALSE when the entered password contains the first name', () => {
    spyOn(component.validateChange, 'emit');

    component.password = 'JohnsPassword123';
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.ngOnChanges();

    fixture.detectChanges();

    expect(component.hasNoFirstOrLastName).toBe(false);
    expect(component.validateChange.emit).toHaveBeenCalledWith(false);
  });

  it('should reset properties when password input is empty', () => {
    spyOn(component.validateChange, 'emit');

    component.password = '';
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.ngOnChanges();

    fixture.detectChanges();

    expect(component.hasMinCharacters).toBe(false);
    expect(component.hasLetterCasing).toBe(false);
    expect(component.hasNoFirstOrLastName).toBe(true);
    expect(component.validateChange.emit).toHaveBeenCalledWith(false);
  });
});