import {
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
  HostListener,
  viewChild,
  OnInit,
  AfterViewInit,
  afterNextRender,
  afterRender,
  Output,
  EventEmitter,
} from "@angular/core";
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
export class NewTicketComponent implements OnChanges, OnInit, AfterViewInit {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  @ViewChild("title") title!: ElementRef<HTMLInputElement>;
  @ViewChild("request") request!: ElementRef<HTMLTextAreaElement>;

  @ViewChild(ButtonComponent) private buttonComponent!: ButtonComponent;

  @Output() add = new EventEmitter<{ title: string; request: string }>();

  constructor() {
    afterNextRender(() => {
      console.log("After Next Render");
    })
    afterRender(() => {
      console.log("After Render")
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }



  ngOnInit(): void {
    console.log(this.form);
  }

  ngAfterViewInit(): void {
    const formData = new FormData(this.form.nativeElement);
    console.log(formData);
    console.log(this.form);
  }

  @HostListener("click") onClick() { }

  onSubmit(title: HTMLInputElement, request: HTMLTextAreaElement) {
    this.add.emit({ title: title.value, request: request.value })

  }
}
