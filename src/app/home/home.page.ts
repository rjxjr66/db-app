import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  photos: any[] = [];
  constructor(private readonly http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/photos')
    .subscribe((data: any) => {
      this.photos = data;
    });
  }

  showDetail(item) {
    alert(item.description);
  }
}
