import { Component,Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() headerValue!:string
  @Input() bgColor!:string
  @Input() textColor!:string
  constructor(private library: FaIconLibrary) {
    library.addIcons(faStar);
  }
}
