import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    fetch('http://localhost:3000/')
      .then(response => {
        return response.json() as Promise<any>;
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
}
