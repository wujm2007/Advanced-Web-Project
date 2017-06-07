import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from '../entities/user';

@Injectable()
export class UserService {

    private usersUrl = 'api/users';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getCurrentUser(): User {
        return {"name": "吴老", "whatsup": "我会说中文", "avatar": "avatar-ts-woody.png"};
    }
}