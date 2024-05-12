import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ApplicationsComponent } from '../applications/applications.component';

@Component({
  selector: 'admin-panel',
  standalone: true,
  imports: [DashboardComponent, ApplicationsComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {

}
