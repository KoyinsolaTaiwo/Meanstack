import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {ArtistService} from 'src/app/services/artist.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
artist: any=[];

  constructor(private artistService:ArtistService, private router:Router,
    private route:ActivatedRoute) { }

    ngOnInit() {
      this.artistService.GetArtist(this.route.snapshot.params['id']).subscribe(
        (data) =>{
            this.artist = data;
            console.log(this.artist);
        }
      );
    }

    onEditArtist(form:NgForm){
      console.log(form.value.name);
      this.artistService.UpdateArtist(this.artist._id, form.value.name,
        form.value.song, form.value.image).subscribe();
    }

}
