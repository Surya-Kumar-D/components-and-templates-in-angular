import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ServerStatusComponent } from "./components/server-status/server-status.component";
import { ServerTrafficComponent } from "./components/server-traffic/server-traffic.component";
import { TodoTicketsComponent } from "./components/todo-tickets/todo-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, ServerTrafficComponent, TodoTicketsComponent],
})
export class AppComponent {
  
}
