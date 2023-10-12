import { Component } from '@angular/core';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  githubUrl = Constants.GITHUB_URL;
}
