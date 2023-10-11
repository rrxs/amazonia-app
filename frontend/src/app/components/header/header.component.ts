import { Component } from '@angular/core';
import Constants from 'src/app/utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  githubUrl = Constants.GITHUB_URL;
}
