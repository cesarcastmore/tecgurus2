import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(value: any[], args: number): any[] {

  	if(!value)
  		return [];

  	console.log("filtros", value);

  	let filtrado: any[] = value.filter(item =>{ return item.precio >  args} )

    return filtrado;
  }

}
