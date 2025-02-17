import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
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
    @Output() statusChange = new EventEmitter<string>();
    isOpened = signal(false);

    onToggle() {
      this.isOpened.set(!this.isOpened());
    }

    marAsComplete(id: string){
        this.statusChange.emit(id);
    }

}
