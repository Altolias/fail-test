import { Component } from '@angular/core';
import * as NoLimit from '@nolimit/nolimit.js';

const noLimit = NoLimit;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fail-test';
}
