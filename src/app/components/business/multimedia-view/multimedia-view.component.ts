import { Component, Input, OnInit } from '@angular/core';
import { Multimedia } from '../../../models/article';

@Component({
  selector: 'app-multimedia-view',
  template: `
    <div *ngIf="selectedImage" class="multimedia-wrapper">
      <img
        [src]="selectedImage.url"
        [alt]="selectedImage.caption"
        [ngClass]="{ jumbo: format === 'superJumbo' }"
      />
      <span class="caption">{{ selectedImage.caption }}</span>
    </div>
  `,
  styleUrls: ['./multimedia-view.component.scss'],
})
export class MultimediaViewComponent implements OnInit {
  @Input() multimedia?: Multimedia[];
  @Input() format?: string;
  selectedImage?: Multimedia;
  constructor() {}

  ngOnInit(): void {
    if (this.format && this.multimedia?.length) {
      this.selectedImage = this.multimedia.find(
        (item) => item.type === 'image' && item.format === this.format
      );
    }
  }
}
