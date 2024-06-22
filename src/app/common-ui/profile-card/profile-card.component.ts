import { Component, Input } from '@angular/core';
import { IProfile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  firstWordUppercase(word: string): string {
    if (typeof word === 'string' && word.length > 0) {
      return word[0].toUpperCase() + word.slice(1);
    }
    return '';
  }

  @Input() profile!: IProfile;
}
