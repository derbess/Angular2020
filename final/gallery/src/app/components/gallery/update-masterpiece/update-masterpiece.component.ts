import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';
import { Masterpiece } from 'src/app/models/masterpiece';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { masterpieces } from 'src/app/db/masterpices';

@Component({
  selector: 'app-update-masterpiece',
  templateUrl: './update-masterpiece.component.html',
  styleUrls: ['./update-masterpiece.component.scss']
})
export class UpdateMasterpieceComponent implements OnInit {
  @Input() mp: Masterpiece;
  isFav: boolean = false;
  onUpdate: boolean = false;
  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;
  @Output() handleChanges = new EventEmitter<void>();

  ngOnInit() {
    const fav = JSON.parse(localStorage.getItem('favorite')) as Favorite;
    if(fav){
      const exist = fav.masterpieces.find((item) => item.id === this.mp.id);
      this.isFav = exist ? true : false;
    }
    const { name, type, year, author, source, museumId, description } = this.mp;
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      year: [0, Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      source: ['', Validators.required],
      museumId: [0, Validators.required]
    });
    this.form.patchValue({ name, type, year, author, source, museumId, description });
    console.log(this.mp);
  }

  delete() {
    const masters = JSON.parse(localStorage.getItem('masterpieces')) as Masterpiece[];
    const leave = masters.filter((item) => item.id !== this.mp.id)
    localStorage.setItem('masterpieces', JSON.stringify(leave));
    this.handleChanges.emit();
  }

  update() {
    this.onUpdate = true;
  }

  cancel() {
    this.onUpdate = false;
  }

  addToFavorite() {
    const fav = JSON.parse(localStorage.getItem('favorite')) as Favorite;
    const exist = fav.masterpieces.find((item) => item.id === this.mp.id);
    if (!exist) {
      fav.masterpieces.push(this.mp);
      this.isFav = true;
    } else {
      const rem = fav.masterpieces.filter(
        (item) => item.id !== exist.id
      );
      fav.masterpieces = rem;
      this.isFav = false;
    }
    localStorage.setItem('favorite', JSON.stringify(fav));

  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const { name, type, year, author, source, museumId, description } = this.form.value;

    let masters = JSON.parse(localStorage.getItem('masterpieces')) as Masterpiece[];
    masters = masters.map(mp => {
      if (mp.id !== this.mp.id) {
        return mp;
      } else {
        return {
          id: this.mp.id,
          name, type, year, author, source, museumId, description
        } as Masterpiece;
      }
    });
    localStorage.setItem('masterpieces', JSON.stringify(masters));
    this.onUpdate = false;
    this.handleChanges.emit();
  }
}