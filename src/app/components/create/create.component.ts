import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ArtistService } from 'src/app/services/artist.service'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private artistService:ArtistService){}

  ngOnInit() {
  }
myDate : Date;

  onAddArtist(form: NgForm) {
    if(!form.valid)
    {
      return;
    }
  console.log(form.value);
  console.log(form.value.date);
  this.myDate = new Date(form.value.date);
  console.log(this.myDate);

  this.artistService.AddArtistInformation(form.value.name,
    form.value.song, form.value.image).subscribe(
      ()=>{
        //do something after out operation has finished
      }
    );
    console.log(form.value);
  form.resetForm();
  }

}

