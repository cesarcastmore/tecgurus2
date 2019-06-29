import { Component, OnInit, TemplateRef } from '@angular/core';
import { Articulo, Electronico } from '../../model'
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticulosService } from '../../shared/services/articulos.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-crud-firestore',
  templateUrl: './crud-firestore.component.html',
  styleUrls: ['./crud-firestore.component.css'],
    providers: [ArticulosService]

})
export class CrudFirestoreComponent implements OnInit {

public articulos: Articulo[] = [];
  articulos$: Observable < any[] > ;

  articulos2: Articulo[] = [];
  modalRef: BsModalRef;

  public formArticulo: FormGroup = new FormGroup({
    id: new FormControl(null),
    titulo: new FormControl(null, [Validators.required]),
    categoria: new FormControl('E'),
    precio: new FormControl(0.00),
    descripcion: new FormControl()
  });


  constructor(private modalService: BsModalService,
    private articulosService: ArticulosService, 
    private angularFirestore: AngularFirestore) {

  }

  openModal(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {

  	this.articulos$ = this.angularFirestore.collection('articulos',
  		ref => ref.orderBy("titulo")).valueChanges();



  }


  async loadList() {
    this.articulos2 = await this.articulos$.toPromise();


  }


  public guardar() {

    let item: any = this.formArticulo.value;

    console.log("ERRORS", this.formArticulo.controls['titulo'].errors);

    if (item.id === null) {

      if (item.categoria == 'E') {

      	item.id= this.angularFirestore.createId();


      	this.angularFirestore.collection("articulos")
      	.doc(item.id).set( item, { merge: true })




      }
    } else {

    	console.log("aqui estoy actualizando", item.id);


    	this.angularFirestore.collection("articulos")
      	.doc(item.id).set( item, { merge: true })


        for (let i = 0; i < this.articulos.length; i++) {
          if (item.id == this.articulos[i].id) {
              this.articulos[i] = item;
           }
       }



    }

    this.formArticulo.reset();
    this.modalRef.hide();



  }

  public edit(articulo: any, template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);

    this.formArticulo.patchValue(articulo);

  }


  public borrar(articulo: any){
  	this.angularFirestore.collection("articulos").doc(articulo.id).delete();
  }


  public uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }



  obtenerObject(obj: any){
  	console.log(obj);

  }

  buscar(searchTerm: string){

  	this.articulos$ = this.angularFirestore.collection('articulos',
  		(ref: any) => { 

  		

  				ref.where('titulo', '==', searchTerm);

  		return ref;
  	}
  		
  		)
  	.valueChanges();
  

  }

}
