import { Component, OnInit, TemplateRef } from '@angular/core';
import { Articulo, Electronico } from '../../model'
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public articulos: Articulo[] = [];
  articulos$: Observable < any[] > ;

  articulos2: Articulo[] = [];
    modalRef: BsModalRef;

    public formArticulo: FormGroup= new FormGroup({
      id: new FormControl(null),
      titulo: new FormControl( null, [Validators.required]),
      categoria: new FormControl('E'),
      precio: new FormControl(0.00),
      descripcion: new FormControl()
    });


  constructor(private modalService: BsModalService) {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  public getObservableList(): Observable < any[] > {

    let articulos_observable: any[] = [];


    return new Observable((observer) => {

      setTimeout(() => {
        articulos_observable.push(new Electronico(2500.234, 'descripcion17', 'A', 'Titulo 7'));
        articulos_observable.push(new Electronico(343.244434, 'descripcion12', 'E', 'Titulo 43'));
        articulos_observable.push(new Electronico(32.244434, 'descripcion12', 'E', 'Titulo 3'));

        articulos_observable.push(new Electronico(4332.244434, 'descripcio44n12', 'E', 'Titulo 4'));
        observer.next(articulos_observable);


      }, 2000);


      setTimeout(() => {
        articulos_observable.push(new Electronico(34, 'descripcion14', 'E', 'Titulo 4'));
        articulos_observable.push(new Electronico(432.244434, 'descripcion 12', 'E', 'Titulo 6'));
        articulos_observable.push(new Electronico(425.244434, 'descripcion 12', 'E', 'Titulo 6'));

        observer.next(articulos_observable);

      }, 7000);


      setTimeout(() => {
        articulos_observable.push(new Electronico(1200.43434, 'descripcion15', 'A', 'Titulo 5'));
        articulos_observable.push(new Electronico(1000.43434, 'descripcion15', 'A', 'Titulo 5'));
        articulos_observable.push(new Electronico(1300.43434, 'descripcion15', 'A', 'Titulo 5'));
        articulos_observable.push(new Electronico(1100.43434, 'descripcion15', 'A', 'Titulo 5'));

        articulos_observable.push(new Electronico(34, 'descripcion14', 'E', 'Titulo 4'));
        observer.next(articulos_observable);

        observer.complete()
      }, 9000);

    });
  }

  ngOnInit() {

    this.articulos.push(new Electronico(32.244434, 'descripcion12', 'E', 'Titulo 2', 'fgrf5g'));

    this.articulos.push(new Electronico(43.4342343, 'descripcion13', 'A', 'Titulo 3', 'dfgff'));
    this.articulos.push(new Electronico(34, 'descripcion14', 'E', 'Titulo 4', 'gffrrf'));
    this.articulos.push(new Electronico(1200.43434, 'descripcion15', 'A', 'Titulo 5', 'dfdfdfg'));
    this.articulos.push(new Electronico(43.2343, 'descripcion16', 'E', 'Titulo 6', 'fgfg'));
    this.articulos.push(new Electronico(2500.234, 'descripcion17', 'A', 'Titulo 7', 'dfgfg'));


    this.articulos$ = this.getObservableList();

    /* this.articulos$.subscribe(items=>{
       this.articulos2=items;

     });

     this.loadList();*/

  }


  async loadList() {
    this.articulos2 = await this.articulos$.toPromise();


  }


  public guardar(){

    let item: any= this.formArticulo.value;

    console.log("ERRORS", this.formArticulo.controls['titulo'].errors);

    if(item.id === null){

      if(item.categoria == 'E'){
        this.articulos.push(new Electronico(item.precio, item.descripcion, item.categoria, item.titulo, this.uuidv4()));
      }
    } else {


      for(let i=0; i< this.articulos.length; i++){
        if(item.id == this.articulos[i].id){
          this.articulos[i] = item;
        }
      }



    }

    this.formArticulo.reset();
    this.modalRef.hide();






  }

  public edit(articulo: any, template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);

    this.formArticulo.patchValue(articulo);

  }


  public uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



}
