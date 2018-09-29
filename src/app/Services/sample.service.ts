import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SampleService {
  constructor(public http: Http) { }
  
  getSamples() {
    return this.http.get('../../assets/data/Sample.json').pipe(map((res: Response) => res.json()));
  }
}
