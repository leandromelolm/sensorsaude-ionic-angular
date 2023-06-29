import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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

  constructor(
    private establishmentService : EstabelecimentoService,
    public loadingCtrl : LoadingController) { 
    this.erro_server = false;
  }

  ngOnInit() {
    this.list();
  }

  list() : void {    
    let loader = this.presentLoading();
    this.establishmentService.findAll().subscribe({
      next: (establishments: Establishment[]) => 
        this.establishments = establishments,
      error: (e) =>
       this.dismissLoading(loader),
      complete: () => {
        this.dismissLoading(loader)
      }
    });
  }   

  async presentLoading() {
    const loading = this.loadingCtrl.create({
      message: 'Please wait...',      
    })
    await (await loading).present();
    return loading;
  }

  dismissLoading(loading: Promise<any>) {
    loading.then(load => {
      load.dismiss();
      this.errorServer();
    })
  }

  errorServer(){      
    this.erro_server = true;
  }

}
