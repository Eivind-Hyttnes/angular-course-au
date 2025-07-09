import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualContribution = '0';
  enteredExpectedReturn = '5';
  enteredInvestmentDuration = '10';

  onSubmit() {
    console.log('Submitted')
    console.log('Initial Investment:', this.enteredInitialInvestment);
    console.log('Annual Contribution:', this.enteredAnnualContribution);
    console.log('Expected Return:', this.enteredExpectedReturn);
    console.log('Investment Duration:', this.enteredInvestmentDuration);
  }
}
