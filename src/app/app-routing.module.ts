import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { ConsultComponent } from './consult/consult.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { MembershipComponent } from './membership/membership.component';
import { PodcastsPageComponent } from './podcastspage/podcastspage.component';
import { PreconsultformComponent } from './preconsultform/preconsultform.component';
import { RegisterComponent } from './register/register.component';
import { VideospageComponent } from './videospage/videospage.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'consult',
    component: ConsultComponent,
  },
  {
    path: 'form',
    component: PreconsultformComponent,
  },
  {
    path: 'membership',
    component: MembershipComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'videos',
    component: VideospageComponent,
  },
  {
    path: 'podcasts',
    component: PodcastsPageComponent,
  },
  {
    path: 'member',
    component: MemberComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
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
