import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetValues();
  }

  GetValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    },
    error => {
      console.log(error);
    });
  }
}
