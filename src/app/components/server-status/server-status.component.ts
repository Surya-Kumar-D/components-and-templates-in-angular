import {AfterViewInit, Component, DestroyRef, inject, OnInit, signal} from "@angular/core";
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css"
})
export class ServerStatusComponent implements OnInit, AfterViewInit  {
  currentStatus= signal< "online" | "offline" | "unknown">("offline");
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const status = Math.random();
      this.currentStatus.set(status < 0.5 ? "offline" : status < 0.9 ? "online" : "unknown");
    }, 1000);

    this.destroyRef.onDestroy(()=> {
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log("ServerStatusComponent.ngAfterViewInit");
  }

}
