import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TodoEffects } from './todo.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TodoEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: TodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TodoEffects,
        provideMockActions(() => actions$)
      ]
    });
    effects = TestBed.get(TodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
