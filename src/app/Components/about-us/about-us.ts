import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
