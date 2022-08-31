import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Launch } from 'src/app/shared/models/launch'
import { LaunchResponse } from 'src/app/shared/models/launch-response'

@Injectable({
    providedIn: 'root',
})
export class LaunchService {
    static baseUrl: string = 'https://api.spacexdata.com/v4/'
    constructor(private http: HttpClient) {}

    getLaunches(): Observable<LaunchResponse> {
        return this.http.post<LaunchResponse>(LaunchService.baseUrl + 'launches/query', {
            options: {
                limit: 30,
                page: 1,
                sort: {
                    flight_number: 'asc',
                },
            },
        })
    }
}
