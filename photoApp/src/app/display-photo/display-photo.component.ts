import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css'],
})
export class DisplayPhotoComponent implements OnInit {
  photoUrl: string = '';

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.photoService.getPhotos().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }

  onClick() {
    this.getImages();
  }
}
