import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from '@angular/core/testing';
import { SpotyAppService } from 'src/app/services/spoty-app.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute,
    private spotifyService: SpotyAppService, private sanitizer: DomSanitizer) { }

  artist: any;
  topTracks: any[];
  trackExample: string = "https://open.spotify.com/embed/track/";
  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(params => {
      console.log(params.get("id"));
      this.getArtist(params.get("id"));
      this.getTopTracksArtist(params.get("id"));
    });
    ;
  }


  async getArtist(idArtist: string) {
    const response = await this.spotifyService.getArtist(idArtist).toPromise();
    this.artist = response;

  }

  async getTopTracksArtist(idArtist: string) {
    const response = await this.spotifyService.getTopTracksArtist(idArtist).toPromise();
    console.log(response);
    this.topTracks = response;

  }

  handleImage(idTrack: string) {
    console.log("lol");
    let url = `${this.trackExample}${idTrack}`;
    console.log(url);

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }



}
