import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { delay, Observable, of, retry, switchMap } from 'rxjs'
import { LaunchService } from 'src/app/core/services/launch.service'
import { Launch } from 'src/app/shared/models/launch'
import { SafePipe } from 'src/app/shared/pipes/safe.pipe'

@Component({
    selector: 'app-launch-detail',
    standalone: true,
    imports: [CommonModule, SafePipe],
    templateUrl: './launch-detail.component.html',
    styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit {
    launch$: Observable<Launch | null> = of(null)
    constructor(private route: ActivatedRoute, private router: Router, private launchService: LaunchService) {}

    ngOnInit(): void {
        // SpaceX Data API is rate limited to 50 requests per second
        this.launch$ = this.route.paramMap.pipe(
            switchMap((params) => {
                const selectedId = params.get('id') || ''
                return this.launchService.getLaunch(selectedId).pipe(retry(3), delay(1000))
            })
        )
    }
}
