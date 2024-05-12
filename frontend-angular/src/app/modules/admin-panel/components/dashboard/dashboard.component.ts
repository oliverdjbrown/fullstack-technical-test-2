import { Component, OnInit, inject } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexNonAxisChartSeries, NgApexchartsModule } from 'ng-apexcharts';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardInterface } from '../../../../interfaces/dashboard.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [NgApexchartsModule, DecimalPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  private dashboardService = inject(DashboardService);

  chart: ApexChart = {
    type: 'pie',
    height: '300px',
    width: '250px',
  };

  totalTransactions: number = 0;

  seriesBusinessCategory: ApexAxisChartSeries | ApexNonAxisChartSeries = [];
  labelsBusinessCategory = ['Simple', 'Complex', 'NA'];

  seriesApplicationStatus: ApexAxisChartSeries | ApexNonAxisChartSeries = [];
  labelsApplicationStatus = ['Incomplete', 'Submitted', 'AML'];

  ngOnInit(): void {
   this.dashboardService.getDashboard(10, 0).subscribe((data: DashboardInterface) => {
      this.totalTransactions = data.totalTransactions;
      this.seriesBusinessCategory = [data.business_category.simple, data.business_category.complex, data.business_category.na];
      this.seriesApplicationStatus = [data.applicationStatus.incomplete, data.applicationStatus.submitted, data.applicationStatus.aml];
   });
  }
}
