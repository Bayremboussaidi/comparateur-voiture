import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

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

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogData: BlogItem[] | undefined;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogData = this.blogService.getBlogData();
  }
}