import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {

  openTerms: boolean = false;  
  isChecked: boolean = false;

  toggleTerms() {
    this.openTerms = !this.openTerms;  // Funzione per cambiare lo stato della variabile
  }
}
