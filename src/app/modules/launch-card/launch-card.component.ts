import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Launch } from 'src/app/shared/models/launch'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-launch-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './launch-card.component.html',
    styleUrls: ['./launch-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchCardComponent {
    @Input() launch: Launch | null = null
}
