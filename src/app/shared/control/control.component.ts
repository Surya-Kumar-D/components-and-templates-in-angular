import {
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
  ContentChildren,
  HostListener,
  QueryList,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
})
export class ControlComponent  {
  @Input({ required: true }) label!: string;
  @ContentChildren('title, request', { descendants: true }) inputs!: QueryList<ElementRef<HTMLInputElement | HTMLTextAreaElement>>;
  private elementRef = inject(ElementRef);




  @HostListener("click") onClick() {
    console.log(this?.inputs)
  }
  // @HostListener("mouseenter", ["$event.target"])
  // onMouseEnter(target: HTMLElement) {
  //   console.log(target);
  // }


}
