import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LaunchListComponent } from './launch-list.component'

describe('LaunchListComponent', () => {
    let component: LaunchListComponent
    let fixture: ComponentFixture<LaunchListComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LaunchListComponent, HttpClientModule],
        }).compileComponents()

        fixture = TestBed.createComponent(LaunchListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
