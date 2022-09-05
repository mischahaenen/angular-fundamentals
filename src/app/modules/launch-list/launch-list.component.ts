import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LaunchService } from 'src/app/core/services/launch.service'
import { delay, map, Observable, of, retry } from 'rxjs'
import { Launch } from 'src/app/shared/models/launch'
import { LaunchCardComponent } from '../launch-card/launch-card.component'

@Component({
    selector: 'app-launch-list',
    standalone: true,
    imports: [CommonModule, LaunchCardComponent],
    templateUrl: './launch-list.component.html',
    styleUrls: ['./launch-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListComponent implements OnInit {
    launches$: Observable<Launch[]> = of([])
    constructor(private readonly launchService: LaunchService) {}

    ngOnInit() {
        // SpaceX Data API is rate limited to 50 requests per second
        this.launches$ = this.launchService.getLaunches().pipe(
            retry(3),
            delay(2000),
            map((res) => res.docs)
        )
    }
}
