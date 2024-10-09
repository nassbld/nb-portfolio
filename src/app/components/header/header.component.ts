import {Component, CUSTOM_ELEMENTS_SCHEMA, HostListener} from '@angular/core';
import {NgClass} from "@angular/common";
import {BackgroundColorService} from "../../services/background-color.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  isScrolled = false;

  constructor(private backgroundColorService: BackgroundColorService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isScrolled = scrollOffset > 50;
  }

  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const bgColor = input.checked ? 'darkblue' : '#0099FF';
    const waveColor = input.checked ? 'black' : 'darkblue';
    this.backgroundColorService.setBgColor(bgColor);
    this.backgroundColorService.setWaveColor(waveColor);
  }
}
