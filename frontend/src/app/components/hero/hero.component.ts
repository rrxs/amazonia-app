import { Component } from '@angular/core';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  githubUrl = Constants.GITHUB_URL;
}
