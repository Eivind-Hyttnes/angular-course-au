import { Component } from '@angular/core';
import { NewTickerComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTickerComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
