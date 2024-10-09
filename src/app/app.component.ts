import {Component, CUSTOM_ELEMENTS_SCHEMA, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {LandingComponent} from "./components/landing/landing.component";
import {ChronologyComponent} from "./components/chronology/chronology.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LandingComponent, ChronologyComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nass-portfolio';

  isVisible = false;
  isArrowActive = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollPosition > 200; // La flèche s'affiche après 200px de défilement
  }

  onRoundClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.scrollToTop();
    this.isArrowActive = !this.isArrowActive; // Active l'animation au clic
  }
}
