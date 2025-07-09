import { FormsModule } from '@angular/forms';

import { Component, output, signal } from '@angular/core';
import type { Iinput } from '../input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<Iinput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualContribution = signal('0');
  enteredExpectedReturn = signal('5');
  enteredInvestmentDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualContribution,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredInvestmentDuration,
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualContribution.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredInvestmentDuration.set('10');
  }
}
