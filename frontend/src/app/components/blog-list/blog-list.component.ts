


import { Component } from '@angular/core';

// Blog item interface
interface BlogItem {
  id: number;
  imgUrl: string;
  title: string;
  author: string;
  date: string;
  description: string;
  time: string;
}

// Mock blog data
const BLOG_DATA: BlogItem[] = [
  {
    id: 1,
    imgUrl: 'assets/all-images/cars-img/example-img-1.jpg',
    title: 'Blog Post 1',
    author: 'John Doe',
    date: '2024-11-30',
    description: 'This is a description for Blog Post 1. It gives a summary of the content.',
    time: '5 min read',
  },
  {
    id: 2,
    imgUrl: 'assets/all-images/cars-img/example-img-2.jpg',
    title: 'Blog Post 2',
    author: 'Jane Smith',
    date: '2024-11-28',
    description: 'This is a description for Blog Post 2. It gives a summary of the content.',
    time: '4 min read',
  },
  // Add more blog items as needed
];

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  blogData = BLOG_DATA;
}
