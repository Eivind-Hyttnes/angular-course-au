import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IncestmentResultsComponent } from "./incestment-results/incestment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, IncestmentResultsComponent, UserInputComponent],
})
export class AppComponent {
  imports = [HeaderComponent];
}
