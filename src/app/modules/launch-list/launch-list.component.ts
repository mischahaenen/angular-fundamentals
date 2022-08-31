import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-launch-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './launch-list.component.html',
    styleUrls: ['./launch-list.component.scss'],
})
export class LaunchListComponent implements OnInit {
    constructor() {}
}
