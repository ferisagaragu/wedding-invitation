import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INVITATION_ROUTING } from './core/routes/invitation.routes';
import { ROOT_ROUTING } from './core/routes/root.routes';
import { MANAGEMENT_ROUTING } from './core/routes/management.routes';

const routes: Routes = [
  ...ROOT_ROUTING,
  ...INVITATION_ROUTING,
  ...MANAGEMENT_ROUTING
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
