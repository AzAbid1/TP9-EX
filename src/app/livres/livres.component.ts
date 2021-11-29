import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  constructor(private fb: FormBuilder, private livreService: LivreService) { }

  LivreForm: FormGroup = new FormGroup({});

  leslivres: Livre[] = [];

  onSubmitForm() {
    this.livreService.addLivres(this.LivreForm.value)
      .subscribe();
  }

  onModifier(id: number) {
    this.livreService.updateLivre(id, this.LivreForm.value)
      .subscribe();
  }

  onSupprimer(id: number) {
    this.livreService.deleteLivre(id)
      .subscribe();
  }
  onReset() {
    this.LivreForm.reset({
      titre: [''],
      prix: [],
      nouveau: [false]
    });
  }

  ngOnInit(): void {
    this.LivreForm = this.fb.group({
      titre: [''],
      prix: [],
      nouveau: [false]
    });
    this.livreService.getLivres()
      .subscribe(data => this.leslivres = data);
  }

}
