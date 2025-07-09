import { FormsModule } from '@angular/forms';

import { Component, output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();
  enteredInitialInvestment = '0';
  enteredAnnualContribution = '0';
  enteredExpectedReturn = '5';
  enteredInvestmentDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredInvestmentDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualContribution,
    });
  }
}
