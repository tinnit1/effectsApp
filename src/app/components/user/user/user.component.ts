import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.reducer';
import {loadUser} from '../../../store/actions';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(({id}) => {
        this.store.dispatch(loadUser({id}));
    });
    this.store.select('user').subscribe(({user}) => this.user = user);
  }

}
