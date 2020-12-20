import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Masterpiece } from 'src/app/models/masterpiece';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-create-masterpiece',
  templateUrl: './create-masterpiece.component.html',
  styleUrls: ['./create-masterpiece.component.scss']
})
export class CreateMasterpieceComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private mpService: ArtService) { }

  form: FormGroup;
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      source: ['', Validators.required],
      type: ['', Validators.required],
      year: [0, Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      museumId: ['', Validators.required]
    });

  }
  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      let newMp:Masterpiece;
      const { name, source, type, year, author, description, museumId } = this.form.value;
      newMp  = { id : 0, name, source, type, year, author, description, museumId };
      this.mpService.createMasterPiece(newMp);
    } else {
      return;
    }


  }

}
