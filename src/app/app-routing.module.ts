import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { PreconsultformComponent } from './preconsultform/preconsultform.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'book',
    component: CalendarComponent,
  },
  {
    path: 'form',
    component: PreconsultformComponent,
  },
];

// const routes: Routes = [
//   {
//     path: "home",
//     component: HomeComponent,
//   },
//   {
//     path: "contact",
//     component: ContactComponent,
//   },

//   {
//     path: "about",
//     component: AboutComponent,
//   },
//   {
//     path: "digital",
//     component: DigitalComponent,
//   },
//   {
//     path: "video",
//     component: VideoComponent,
//   },
//   {
//     path: "classroom",
//     component: ClassroomComponent,
//   },
//   {
//     path: "auditorium",
//     component: AuditoriumComponent,
//   },
//   {
//     path: "cctv",
//     component: CctvComponent,
//   },
//   {
//     path: "theater",
//     component: TheaterComponent,
//   },

//   {
//     path: "lignting",
//     component: LightingComponent,
//   },
//   {
//     path: "cabling",
//     component: CablingComponent,
//   },

//   { path: "", component: HomeComponent, pathMatch: "full" },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
