import { Component } from "@angular/core";
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from "./todo-tickets.model";
import {TicketComponent} from "./ticket/ticket.component";

@Component({
  selector: "app-todo-tickets",
  standalone: true,
    imports: [DashboardItemComponent, NewTicketComponent, TicketComponent],
  templateUrl: "./todo-tickets.component.html",
  styleUrl: "./todo-tickets.component.css",
})
export class TodoTicketsComponent  {
  tickets: Ticket[] = [];

  onAdd(event: {title: string; request: string}){
   this.tickets.push({id: `ticket-${this.tickets.length}`, request: event.request, title: event.title, status:'open'})  
  console.log(this.tickets)
  }
}
