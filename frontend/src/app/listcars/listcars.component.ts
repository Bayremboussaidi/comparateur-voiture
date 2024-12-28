import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcars',
  templateUrl: './listcars.component.html',
  styleUrls: ['./listcars.component.css']
})
export class ListcarsComponent {
  voitures: any[] = [];
  voitureCount: number = 0;
  pageCount: number = 0;
  page: number = 0;
  loading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getCarData();
    this.getCarCount();
  }

  getCarData() {
    this.loading = true;
    this.http.get(`http://localhost:4000/voitures?page=${this.page}`).subscribe(
      (response: any) => {
        this.voitures = response.data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load cars';
        this.loading = false;
      }
    );
  }

  getCarCount() {
    this.http.get(`http://localhost:4000/api/v1/voitures/search/getVoitureCount`).subscribe(
      (response: any) => {
        this.voitureCount = response.count;
        this.pageCount = Math.ceil(this.voitureCount / 8);
      },
      (error) => {
        this.error = 'Failed to load car count';
      }
    );
  }

  setPage(page: number) {
    this.page = page;
    this.getCarData();
  }
}