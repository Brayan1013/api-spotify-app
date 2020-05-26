import { Component } from '@angular/core';
import { SpotyAppService } from 'src/app/services/spoty-app.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newReleases: string[];
  message: string;
  loading: boolean;
  constructor(private spotyService: SpotyAppService) {
    this.getToken();

  }


  async getToken() {
    this.loading = true;
    const response = await this.spotyService.getToken().toPromise();
    this.spotyService.token = response.token.access_token;
    this.getNewReleases();
  }


  async getNewReleases() {
    try {
      const response = await this.spotyService.getNewRealeses().toPromise();
      this.newReleases = response;
      this.loading = false;
    } catch (error) {
      this.message = error.error.error.message;
    }
  }




}
