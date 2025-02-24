import { Component, input } from "@angular/core";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "button[app-button]",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent {
  buttonText = input.required<string>();
  buttonIcon = input.required<string>();
}
