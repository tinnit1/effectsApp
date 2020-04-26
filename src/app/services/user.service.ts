import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(`${this.URL}users?page=/2`)
      .pipe(
        map((data: any) => data.data)
      );
  }
}
