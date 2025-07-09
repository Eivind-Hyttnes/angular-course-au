import { FormsModule } from '@angular/forms';

import { Component, inject, output, signal } from '@angular/core';
import type { Iinput } from '../input.model';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  investmentService = inject(InvestmentService);

  calculate = output<Iinput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualContribution = signal('0');
  enteredExpectedReturn = signal('5');
  enteredInvestmentDuration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualContribution,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredInvestmentDuration,
    });
  }
}
