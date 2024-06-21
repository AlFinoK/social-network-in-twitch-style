import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/service/profile.service';
import { IProfile } from './data/interfaces/profile.interface';

// все декораторы начинаются с: @
// ngModule - декоратор модуля
// component - декоратор компонента
// injectable - декоратор сервиса
// directive - декоратор директивы

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  profileService = inject(ProfileService);

  profiles: IProfile[] = [];

  constructor() {
    this.profileService.getAccounts().subscribe((value) => {
      this.profiles = value;
    });
  }
}
