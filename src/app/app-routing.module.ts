import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'attendance-holiday',
    loadChildren: () => import('./pages/attendance-holiday/attendance-holiday.module').then( m => m.AttendanceHolidayPageModule)
  },
  {
    path: 'dashbord',
    loadChildren: () => import('./pages/dashbord/dashbord.module').then( m => m.DashbordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login-new',
    loadChildren: () => import('./pages/login-new/login-new.module').then( m => m.LoginNewPageModule)
  },
  {
    path: 'feesdue',
    loadChildren: () => import('./pages/feesdue/feesdue.module').then( m => m.FeesduePageModule)
  },
  {
    path: 'pay-online',
    loadChildren: () => import('./pages/pay-online/pay-online.module').then( m => m.PayOnlinePageModule)
  },
  {
    path: 'play-quiz',
    loadChildren: () => import('./pages/play-quiz/play-quiz.module').then( m => m.PlayQuizPageModule)
  },
  {
    path: 'assignment',
    loadChildren: () => import('./pages/assignment/assignment.module').then( m => m.AssignmentPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./pages/timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./pages/result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'events-program',
    loadChildren: () => import('./pages/events-program/events-program.module').then( m => m.EventsProgramPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./pages/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'school-gallery',
    loadChildren: () => import('./pages/school-gallery/school-gallery.module').then( m => m.SchoolGalleryPageModule)
  },
  {
    path: 'ask-doubt',
    loadChildren: () => import('./pages/ask-doubt/ask-doubt.module').then( m => m.AskDoubtPageModule)
  },
  {
    path: 'data-sheet',
    loadChildren: () => import('./pages/data-sheet/data-sheet.module').then( m => m.DataSheetPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'user-mode',
    loadChildren: () => import('./pages/user-mode/user-mode.module').then( m => m.UserModePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'add-student',
    loadChildren: () => import('./pages/add-student/add-student.module').then( m => m.AddStudentPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
