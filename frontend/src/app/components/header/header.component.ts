// header.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service'; // Assuming you have an AuthService for authentication

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { path: '/home', display: 'Accueil' },
    { path: '/about', display: 'À propos' },
    { path: '/cars', display: 'Voitures' },
    { path: '/blogs', display: 'Blogs' },
    { path: '/contact', display: 'Contact' },
  ];

  navLinksMobile = [
    { path: '/home', display: 'Accueil' },
    { path: '/about', display: 'À propos' },
    { path: '/cars', display: 'Voitures' },
    { path: '/blogs', display: 'Blogs' },
    { path: '/contact', display: 'Contact' },
  ];

  isMobile = false;
  user: any; // This should be defined based on your AuthService
  @ViewChild('header') headerRef!: ElementRef;
  @ViewChild('menu') menuRef!: ElementRef;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser(); // Fetch user info from AuthService
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));
    this.stickyHeader();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkMobile.bind(this));
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  stickyHeader() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        this.headerRef.nativeElement.classList.add('sticky__header');
      } else {
        this.headerRef.nativeElement.classList.remove('sticky__header');
      }
    });
  }

  toggleMenu() {
    this.menuRef.nativeElement.classList.toggle('menu__active');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}