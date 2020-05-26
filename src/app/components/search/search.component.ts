import { Component, OnInit } from '@angular/core';
import { SpotyAppService } from 'src/app/services/spoty-app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistsBySearch: any[];
  artist: string;
  loading: boolean = false;
  constructor(private spotyService: SpotyAppService) { }

  ngOnInit() {
  }

  searchArtist(event: any) {
    this.artist = event.target.value.replace(/\s/g, '');
    if (this.artist.length > 1) {
      this.loading = true;
      this.spotyService.getArtistsBySearch(this.artist).subscribe(data => {
        this.artistsBySearch = data;
        this.loading = false;
      })
    }

  }

}
