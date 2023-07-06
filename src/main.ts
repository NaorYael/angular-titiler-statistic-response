import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <pre>{{statisticResponse | json}}</pre>
  `,
})
export class App {
 statisticResponse = {
    "min": 0,
    "max": 754,
    "mean": 59.980025540865384,
    "count": 798720,
    "sum": 47907246,
    "std": 58.84211146951522,
    "median": 52,
    "majority": 0,
    "minority": 435,
    "unique": 571,
    "histogram": [
        [
            499259,
            243779,
            46593,
            6860,
            1577,
            448,
            130,
            49,
            19,
            6
        ],
        [
            0,
            75.4,
            150.8,
            226.20000000000002,
            301.6,
            377,
            452.40000000000003,
            527.8000000000001,
            603.2,
            678.6,
            754
        ]
    ],
    "valid_percent": 100,
    "masked_pixels": 0,
    "valid_pixels": 798720,
    "percentile_98": 201,
    "percentile_2": 0
}


}

bootstrapApplication(App);
