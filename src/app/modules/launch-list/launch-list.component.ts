import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LaunchService } from 'src/app/core/services/launch.service'
import { map, Observable, of } from 'rxjs'
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
        this.launches$ = this.launchService.getLaunches().pipe(map((res) => res.docs))
    }
}
