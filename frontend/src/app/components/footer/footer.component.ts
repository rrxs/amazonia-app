import { Component } from '@angular/core';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  githubUrl = Constants.GITHUB_URL;
}
