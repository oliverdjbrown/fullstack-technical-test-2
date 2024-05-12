import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Application,
  ApplicationsData,
} from '../../../core/interfaces/applications.interface';
import { environment } from '../../../../environments/environment';
import { mkConfig, generateCsv, download } from "export-to-csv";

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private readonly http = inject(HttpClient);

  getApplications(limit: number, offset: number): Observable<ApplicationsData> {
    const params = new HttpParams().set('limit', limit).set('offset', offset);

    return this.http.get<ApplicationsData>(
      `${environment.backendUrl}/applications`,
      { params }
    );
  }

  getApplication(applicationId: string): Observable<ApplicationsData> {
    return this.http.get<ApplicationsData>(
      `${environment.backendUrl}/applications/${applicationId}`
    );
  }

  postApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(
      `${environment.backendUrl}/applications`,
      application
    );
  }

  putApplication(application: Application): Observable<Application> {
    return this.http.put<Application>(
      `${environment.backendUrl}/applications/${application.business_application_id}`,
      application
    );
  }

  deleteApplication(applicationId: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.backendUrl}/applications/${applicationId}`
    );
  }

  exportToCsv(applications: any[]): void {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });

    const csv = generateCsv(csvConfig)(applications);

    download(csvConfig)(csv);
  }
}
