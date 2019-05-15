import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { LoaderService } from '../shared/loader/loader.service';
import { User } from 'src/app/model/user';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class UserResolver implements Resolve<Observable<User>> {

    constructor(
        private user: UserService,
        private loader: LoaderService
        ) {
    }

    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<User> {
        this.loader.open();
        if(!this.user.hasLocalUser()){
            return this.user.getUser();
        }else{
            return this.user.getLocalUser();
        }
    }

}