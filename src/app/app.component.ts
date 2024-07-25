import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, CardsComponent],
})
export class AppComponent {
  Posts = [
    {
      title: 'Tree',
      id: '@Nature',
      description: 'Lorem ipsum dolor sit amet.',
      image: './assets/tree.jpeg',
    },
    {
      title: 'Biking',
      id: '@Travel',
      description: 'Lorem ipsum dolor sit amet.',
      image: './assets/biking.jpeg',
    },
    {
      title: 'Mountain',
      id: '@Climbing',
      description: 'Lorem ipsum dolor sit amet.',
      image: './assets/mountain.jpeg',
    },
  ];
}
