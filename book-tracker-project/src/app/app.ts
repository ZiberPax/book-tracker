import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExchangeRates} from "./test/test.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExchangeRates],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('book-tracker-project');
}