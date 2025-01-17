import { Component,ViewChild  } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
declare var bootstrap: any;
@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  bgColor:string="bgColorsecond";
  textColor:string="textColorsecond";
  headerValue: string ="portfolio component"
images:string[]=['Images/port1.png','Images/port2.png','Images/port3.png'
  ,'Images/port3.png','Images/port1.png','Images/port2.png']
  imageInModal!:string
  @ViewChild('exampleModal') modal: any;
  openModal(img:string) {
    this.imageInModal=img;
    const modalElement = document.getElementById('exampleModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
}
