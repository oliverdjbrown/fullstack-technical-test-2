import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DashboardInterface } from '../../../interfaces/dashboard.interface';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly http = inject(HttpClient);

  getDashboard(limit: number, offset: number): Observable<DashboardInterface> {
    const params = new HttpParams().set('limit', limit).set('offset', offset);
    return this.http.get<DashboardInterface>(
      `${environment.backendUrl}/dashboards/`,
      { params }
    );
  }
}
