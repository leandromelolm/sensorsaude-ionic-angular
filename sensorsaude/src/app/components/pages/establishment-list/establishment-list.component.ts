import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from 'src/app/services/establishment.service';
import { Establishment } from 'src/app/services/model';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.scss'],
})
export class EstablishmentListComponent  implements OnInit {

  public title :string = "Lista de Estabelecimento";

  establishments! : Establishment[];

  erro_server : boolean;

  constructor(private establishmentService : EstabelecimentoService) { 
    this.erro_server = false;
  }

  ngOnInit() {
    this.list();
  }

  list() : void {    
    this.establishmentService.findAll().subscribe({
      next: (establishments: Establishment[]) => 
        this.establishments = establishments,
      error: (e) =>
       this.errorServer(),
      complete: () => {
        console.log("OK")
        console.log(this.establishments)
      }
    });
  }

  errorServer(){
    console.log("erro")    
    this.erro_server = true;
  }


}
