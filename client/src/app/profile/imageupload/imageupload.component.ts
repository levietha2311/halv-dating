import { Component, OnInit, VERSION } from '@angular/core';
import {
  GalleryService, Description, DescriptionStrategy, Image, PreviewConfig,
  PlainGalleryConfig, PlainGalleryStrategy, GridLayout
} from 'angular-modal-gallery';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent {

  name: string;

  constructor(private galleryService: GalleryService) {
    this.name = `${VERSION.full}`;
  }
  images: Image[] = [
    new Image(
      0,
      { // modal
        img: 'assets/img/1.jpg',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'assets/img/2.jpg',
        description: 'Description 2'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'assets/img/3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
    ),
    new Image(
      3,
      { // modal
        img: 'assets/img/5.jpg',
        description: 'Description 5',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      4,
      { // modal
        img: 'assets/img/1.jpg'
      }
    ),
    new Image(
      5,
      { // modal
        img: 'assets/img/2.jpg'
      }
    ),
    new Image(
      5,
      { // modal
        img: 'assets/img/2.jpg'
      }
    ),
    new Image(
      5,
      { // modal
        img: 'assets/img/2.jpg'
      }
    ),
    new Image(
      5,
      { // modal
        img: 'assets/img/2.jpg'
      }
    ),
    new Image(
      5,
      { // modal
        img: 'assets/img/2.jpg'
      }
    ),
    new Image(
      5,
      { // modal
        img: 'assets/img/2.jpg'
      }
    ),
    new Image(
      5,
      { // modal
        img: 'assets/img/2.jpg'
      }
    )
  ];
  customDescriptionHideIfEmpty: Description = {
    strategy: DescriptionStrategy.HIDE_IF_EMPTY,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };
  previewConfigImage: PreviewConfig = {
    visible: true,
    number: 10,
    arrows: false
  };
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '120px', height: '80px' }, { length: 4, wrap: true })
  };
}

