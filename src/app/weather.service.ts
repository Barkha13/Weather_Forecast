import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class WeatherService {
  constructor(private _http : Http) { }

  getWeather(city){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&AppID=c53da24e11907873268eb100119bf205');
  }
}
