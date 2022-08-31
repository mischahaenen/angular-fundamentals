import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    { path: '', redirectTo: 'launches', pathMatch: 'full' },
    {
        path: 'launches',
        loadComponent: () => import('./modules/launch-list/launch-list.component').then((m) => m.LaunchListComponent),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
