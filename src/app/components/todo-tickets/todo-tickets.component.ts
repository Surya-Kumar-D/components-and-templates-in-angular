import { Component } from "@angular/core";
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: "app-todo-tickets",
  standalone: true,
  imports: [DashboardItemComponent, NewTicketComponent],
  templateUrl: "./todo-tickets.component.html",
  styleUrl: "./todo-tickets.component.css",
})
export class TodoTicketsComponent {}
