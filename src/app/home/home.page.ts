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

  newUser() {
    const user = {
      name: '새유저',
      description: '새 유져 입니다.',
      field: false,
      filename: 'string',
      views: 0,
      is: true,
    };

    this.http.post('http://localhost:3000/users', user)
    .subscribe(_ => {
      this.photos.push(_);
    });
  }

  showDetail(item) {
    alert(item.description);
  }
}
