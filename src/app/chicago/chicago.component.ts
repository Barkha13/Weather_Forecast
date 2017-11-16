import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service'

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  city = 'chicago'
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
