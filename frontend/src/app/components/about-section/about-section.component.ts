import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  @Input() aboutClass: string = '';

  get marginTop() {
    return this.aboutClass === 'aboutPage' ? '0px' : '280px';
  }
}
