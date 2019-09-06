import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

import { Testimony } from '../models/testimony';

@Component({
  selector: 'app-testimony-carousel',
  templateUrl: './testimony-carousel.component.html',
  styleUrls: ['./testimony-carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonyCarouselComponent implements OnInit, AfterViewInit {
  @Input() testimonies: Testimony[];

  readonly carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    interval: { timing: 5000, initialDelay: 0 },
    point: { visible: true },
    loop: true,
  };

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

}
