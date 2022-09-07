import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-success-indicator',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './success-indicator.component.html',
    styleUrls: ['./success-indicator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessIndicatorComponent {
    @Input() success: boolean = true
}
