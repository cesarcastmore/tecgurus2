import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, args?: any): string {

  	console.log(args);

  	if(args.mayusculas == true){
  		return value.toUpperCase();
  	}
    return value.toLowerCase();

  }

}
