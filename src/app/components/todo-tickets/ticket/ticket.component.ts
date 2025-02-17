import {Component, Input, signal} from '@angular/core';
import {Ticket} from "../todo-tickets.model";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
    @Input({required: true}) data!: Ticket;

    isOpened = signal(false);

    onToggle() {
      this.isOpened.set(!this.isOpened());
    }

    protected readonly onclick = onclick;
}
