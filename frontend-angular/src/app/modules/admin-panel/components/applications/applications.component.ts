import { Component, inject } from '@angular/core';
import {
  Application,
  ApplicationsData,
} from '../../../../core/interfaces/applications.interface';
import { ApplicationService } from '../../services/application.service';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { NotificationService } from '../../../../core/services/notification.service';
import { offset } from '@popperjs/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'applications',
  standalone: true,
  imports: [NgbPaginationModule, FormsModule],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss',
})
export class ApplicationsComponent {
  private applicationService = inject(ApplicationService);
  private notificationService = inject(NotificationService);
  private modalService = inject(NgbModal);

  applications!: Application[];

  limit = 20;
  offset = 1;
  collectionSize = 170;

  sortedColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    this.getApplications();
  }

  getApplications(): void {
    this.applicationService
      .getApplications(this.limit, this.offset)
      .subscribe((data: ApplicationsData) => {
        this.applications = data.applications;
        this.collectionSize = data.total;
      });
  }

  deleteApplication(applicationId: number): void {
    this.applicationService.deleteApplication(applicationId).subscribe(() => {
      this.notificationService.showSuccess('Application deleted', 'Success');

      this.getApplications();
    });
  }

  exportToCsv(): void {
    this.applicationService.exportToCsv(this.applications);

    this.notificationService.showSuccess(
      'Applications exported to CSV',
      'Success'
    );
  }

  openModal(application?: Application) {
    const modalRef = this.modalService.open(ApplicationFormComponent);
    modalRef.componentInstance.application = application;
    modalRef.result.then((application: Application) => {
      if (!application) {
        return;
      }

      if (application.id) {
        this.applicationService
          .putApplication(application)
          .subscribe(() => this.getApplications());

        this.notificationService.showSuccess('Application updated', 'Success');
      } else {
        this.applicationService
          .postApplication(application)
          .subscribe(() => this.getApplications());

        this.notificationService.showSuccess('Application created', 'Success');
      }
    });
  }

  sortBy(columnName: string): void {
    if (this.sortedColumn === columnName) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }

    this.sortedColumn = columnName;

    this.applications.sort((a, b) => {
      const aValue = this.getPropertyValue(a, columnName);
      const bValue = this.getPropertyValue(b, columnName);

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  private getPropertyValue(obj: any, path: string): any {
    const parts = path.split('.');
    return parts.reduce((acc, current) => acc?.[current], obj);
  }
}
