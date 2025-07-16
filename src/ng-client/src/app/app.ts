import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './core/services/layout.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private layoutService: LayoutService) {
    this.layoutService.changeTheme(this.layoutService.defaultTheme);
  }
}
