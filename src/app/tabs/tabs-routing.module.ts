import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      // {
      //   path: 'tab2',
      //   loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      // },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/add-student/add-student.module').then( m => m.AddStudentPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      }
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
