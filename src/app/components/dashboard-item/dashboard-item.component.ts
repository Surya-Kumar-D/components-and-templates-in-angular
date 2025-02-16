import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dashboard-item",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard-item.component.html",
  styleUrl: "./dashboard-item.component.css",
})
export class DashboardItemComponent {
  @Input({ required: true }) iconsSrc = "";
  @Input({ required: true }) iconAlt = "";
  @Input({ required: true }) title = "";
}
