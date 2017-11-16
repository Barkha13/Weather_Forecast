import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service'

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  city = 'washington';
  humidity;
  temp_high;
  temp_low;
  temp_avg;
  status;

  constructor(private _weatherService : WeatherService) { }

  ngOnInit() {
    this._weatherService.getWeather(this.city).subscribe(
      (response) => {
        this.humidity = response.json()['main']['humidity'];
        this.temp_high = response.json()['main']['temp_max'];
        this.temp_low = response.json()['main']['temp_min'];
        this.temp_avg = response.json()['main']['temp'];
        this.status = response.json()['weather'];
      },
      (err) => {console.log(err);}
    );
  }

}
