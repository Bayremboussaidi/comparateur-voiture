import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carlisting',
  templateUrl: './carlisting.component.html',
  styleUrl: './carlisting.component.css'
})
export class CarlistingComponent {

  voitures: any[] = [];
  loading: boolean = true;
  error: string | null = null;
  pageCount: number = 0;
  page: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
    this.fetchVoitureCount();
  }

  fetchData(): void {
    this.loading = true;
    this.http.get(`/voitures?page=${this.page}`).subscribe(
      (data: any) => {
        this.voitures = data;
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
        this.loading = false;
      }
    );
  }

  fetchVoitureCount(): void {
    this.http.get(` /voitures/search/getVoitureCount`).subscribe(/*
      (count: number) => {
        this.pageCount = Math.ceil(count / 8);
        window.scrollTo(0, 0);
      }*/
    );
  }

  setPage(number: number): void {
    this.page = number;
    this.fetchData();
  }

  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    // Implement sorting logic based on `value`
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.pageCount }, (_, i) => i);
  }

}
