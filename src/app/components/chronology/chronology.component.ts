import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {Button} from "primeng/button";
import { animate, scroll } from 'motion';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BackgroundColorService} from "../../services/background-color.service";

@Component({
  selector: 'app-chronology',
  standalone: true,
  imports: [
    AnimateOnScrollModule,
    Button,
    NgOptimizedImage,
    CommonModule
  ],
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.css'],
})
export class ChronologyComponent implements AfterViewInit, OnInit {
  items = [
    { src: '/images/SU-photo.jpg', title: '2017-2022', logo: '/images/SU-logo.png', description: 'Licence mono-disciplinaire en informatique' },
    { src: '/images/EFREI-photo.jpg', title: '2022-2024', logo: '/images/EFREI-logo.png', description: 'Mastère Dev Manager Full-Stack en alternance chez BNP Paribas' }
  ];

  backgroundColor: string = '';

  constructor(private backgroundColorService: BackgroundColorService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.backgroundColorService.waveColor$.subscribe(color => {
      this.backgroundColor = color;
    });
  }

  ngAfterViewInit(): void {
    const section = this.elementRef.nativeElement.querySelector('section');
    const items = this.elementRef.nativeElement.querySelectorAll('li');

    const isMobile = window.innerWidth < 768;

    if (!isMobile && section && items.length) {
      // Animation de la galerie horizontale pendant le défilement vertical
      scroll(
        animate('ul', {
          transform: ['none', `translateX(-${items.length - 1}00vw)`]
        }),
        { target: section }
      );

      // Parallaxe pour les titres d'image
      const segmentLength = 1 / items.length;
      items.forEach((item: any, i: number) => {
        const header = item.querySelector('h2');
        if (header) {
          scroll(animate(header, { x: [200, -200] }), {
            target: section,
            offset: [
              [i * segmentLength, 1],
              [(i + 1) * segmentLength, 0]
            ]
          });
        }
      });
    } else if (isMobile && section && items.length) {
      const segmentLength = 1 / items.length;
      items.forEach((item: any, i: number) => {
        const header = item.querySelector('h2');
        if (header) {
          scroll(animate(header, {x: [170, 100]}), {
            target: section,
            offset: [
              [i * segmentLength, 1],
              [(i + 1) * segmentLength, 0]
            ]
          });
        }
      });
    }
  }
}
