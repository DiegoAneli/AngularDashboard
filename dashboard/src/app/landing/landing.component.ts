import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [RouterModule, NavbarComponent]
})



export class LandingComponent {
  title = 'Landing Page';
  isMenuOpen = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
