import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScheduleComponent } from 'app/modules/student/schedule/schedule.component';

const scheduleRoutes: Route[] = [
    {
        path     : '',
        component: ScheduleComponent
    }
];

@NgModule({
    declarations: [
      ScheduleComponent
    ],
    imports     : [
        RouterModule.forChild(scheduleRoutes)
    ]
})
export class ScheduleModule
{
}