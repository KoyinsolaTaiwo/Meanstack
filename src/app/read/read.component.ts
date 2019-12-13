import { Component, OnInit } from '@angular/core';
import {ArtistService } from '../services/artist.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
    MyArtist: any = [];

  constructor(private artistService : ArtistService) { }

  ngOnInit() {
    this.artistService.getArtistInformation().subscribe(data =>
      {
        this.MyArtist = data.artists;
        console.log(this.MyArtist);
      });
  }

}
