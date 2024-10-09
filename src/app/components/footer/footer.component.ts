import {Component, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";
import {BackgroundColorService} from "../../services/background-color.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  backgroundColor: string = '';

  constructor(private backgroundColorService: BackgroundColorService) {}

  ngOnInit() {
    this.backgroundColorService.bgColor$.subscribe(color => {
      this.backgroundColor = color;
    });
  }

}
