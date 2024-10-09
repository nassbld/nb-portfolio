import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundColorService {
  private bgColor = new BehaviorSubject<string>('#0099FF');
  private waveColor = new BehaviorSubject<string>('darkblue');
  bgColor$ = this.bgColor.asObservable();
  waveColor$ = this.waveColor.asObservable();

  constructor() {
    this.setBgColor('#0099FF');
  }

  setBgColor(color: string) {
    this.bgColor.next(color);
    document.body.style.backgroundColor = color;
  }

  setWaveColor(newColor: string) {
    this.waveColor.next(newColor);
  }
}
