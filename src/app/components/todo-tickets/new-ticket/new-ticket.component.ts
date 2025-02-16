import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from "../../button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
