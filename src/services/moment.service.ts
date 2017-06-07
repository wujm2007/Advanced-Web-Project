import {Injectable}    from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Moment} from '../entities/moment';
import {UserService} from './user.service'

@Injectable()
export class MomentService {
    private headers = new Headers({'Content-Type': 'application/json'});

    private momentUrl = 'api/moments';

    constructor(private http: Http, private userService: UserService) {
    }

    getMoments(): Promise<Moment[]> {
        return this.http.get(this.momentUrl)
            .toPromise()
            .then(response => response.json().data as Moment[])
            .catch(this.handleError);
    }

    getMoment(momentId: number): Promise<Moment> {
        const url = `${this.momentUrl}/${momentId}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Moment)
            .catch(this.handleError);
    }

    createMoment(data:any): Promise<Moment> {
        const user = this.userService.getCurrentUser();
      return this.http
        .post(this.momentUrl, JSON.stringify({
                "author": user.name,
                "avatar": user.avatar,
                "time": "TODAY",
                "image": data.image,
                "content": data.content,
                "likes": [],
                "comments": []
            }), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Moment)
        .catch(this.handleError);
    }

    like(momentId: number): Promise<Moment> {
        const user = this.userService.getCurrentUser();
        const url = `${this.momentUrl}/${momentId}`;
        
        return this.getMoment(momentId).then(moment => {
            const index = moment.likes.indexOf(user.name);
            if (index !== -1)
                moment.likes.splice(index,1);
            else
                moment.likes.push(user.name);
            console.log(moment.likes);
            return moment
        })
        .then(moment=>{
            this.http.put(url, JSON.stringify(moment), {headers: this.headers}).toPromise();
            return moment;
        })
        .then(moment => moment)
        .catch(this.handleError);
    }

    comment(momentId: number, comment: string): Promise<Moment> {
        const user = this.userService.getCurrentUser();
        const url = `${this.momentUrl}/${momentId}`;
        
        return this.getMoment(momentId).then(moment => {
                moment.comments.push({
                    "author": user.name,
                    "avatar": user.avatar,
                    "content": comment,
                    "time": "3:43 pm"
                });
            return moment
        })
        .then(moment=>{
            this.http.put(url, JSON.stringify(moment), {headers: this.headers}).toPromise();
            return moment;
        })
        .then(moment => moment)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}