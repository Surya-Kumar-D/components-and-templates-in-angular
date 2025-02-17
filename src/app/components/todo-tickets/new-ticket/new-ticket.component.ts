import {Component, ElementRef, OnChanges, SimpleChanges, ViewChild, HostListener, viewChild} from "@angular/core";
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
  @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  @ViewChild('title') title!: ElementRef<HTMLInputElement>;
  @ViewChild('request') request!: ElementRef<HTMLTextAreaElement>;

  @ViewChild(ButtonComponent) private buttonComponent!: ButtonComponent ;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @HostListener("click") onClick() {
    this.request.nativeElement.value ='';
    console.log(this.buttonComponent);
  }

  onSubmit(title: HTMLInputElement, request: HTMLTextAreaElement) {
    console.log(title.value, request.value);
   // this.form?.nativeElement.reset();
   this.title.nativeElement.value = "";
   this.request.nativeElement.value = "";
  }
}
