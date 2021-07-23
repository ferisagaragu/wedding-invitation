import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guest-message',
  templateUrl: './guest-message.component.html',
  styleUrls: ['./guest-message.component.scss']
})
export class GuestMessageComponent {

  @ViewChild("audioPlayer") audioPlayer: HTMLAudioElement | any;

  private played: boolean;

  constructor() {
    this.played = false;
  }

  play() {
    if (!this.played) {
      this.played = true;
      this.audioPlayer.nativeElement.play();
    } else {
      this.played = false;
      this.audioPlayer.nativeElement.pause();
    }
  }

}
