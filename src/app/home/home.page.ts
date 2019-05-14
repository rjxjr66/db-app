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
    this.http.get('http://localhost:3000/users')
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

    user.name = prompt('이름을 입력하세요.');

    this.http.post('http://localhost:3000/users', user)
    .subscribe(_ => {
      this.photos.push(_);
    });
  }

  delete(id) {
    this.http.delete(`http://localhost:3000/users/${id}`)
    .subscribe((data: any) => {
      this.photos.splice(this.photos.findIndex(_ => _.id === id), 1);
    });
  }

  showDetail(item) {
    alert(item.description);
  }
}
