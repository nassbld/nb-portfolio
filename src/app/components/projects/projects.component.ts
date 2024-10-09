import {Component, OnInit} from '@angular/core';
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {Button} from "primeng/button";
import {Ripple} from "primeng/ripple";
import { PrimeNGConfig } from 'primeng/api';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {BackgroundColorService} from "../../services/background-color.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AnimateOnScrollModule,
    Button,
    Ripple,
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  backgroundColor: string = '';

  constructor(private backgroundColorService: BackgroundColorService) {}

  ngOnInit() {
    this.backgroundColorService.waveColor$.subscribe(color => {
      this.backgroundColor = color;
    });
  }

}
