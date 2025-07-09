import { FormsModule } from '@angular/forms';

import { Component, output } from '@angular/core';
import type { Idata } from '../input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<Idata>();
  enteredInitialInvestment = '0';
  enteredAnnualContribution = '0';
  enteredExpectedReturn = '5';
  enteredInvestmentDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualContribution,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredInvestmentDuration,
    });
  }
}
