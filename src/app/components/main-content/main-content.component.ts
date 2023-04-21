import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  inputValue = '';
  securityLevel = {
    weak: 'Weak',
    moderate: 'Moderate',
    strong: 'Strong',
  };
  regex = {
    capitalCharacter: /[A-Z]/,
    numericCharacter: /[0-9]/,
    specialCharacter: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  };

  passwordChecker(string: string) {
    if (string.length !== 0 && string.length <= 5) {
      return this.securityLevel.weak;
    }
    if (
      string.length >= 8 &&
      this.regex.capitalCharacter.test(string) &&
      this.regex.numericCharacter.test(string) &&
      this.regex.specialCharacter.test(string)
    ) {
      return this.securityLevel.strong;
    }
    if (string.length >= 6) {
      return this.securityLevel.moderate;
    }
    return '';
  }
}
