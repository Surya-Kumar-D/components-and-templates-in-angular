import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
})
export class ControlComponent {
  @Input({ required: true }) label!: string;
  private elementRef = inject(ElementRef);

  @HostListener("click") onClick() {
    console.log(this.elementRef.nativeElement);
  }
  @HostListener("mouseenter", ["$event.target"])
  onMouseEnter(target: HTMLElement) {
    console.log(target);
  }
}
