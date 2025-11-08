import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(num: any) {
    let rem = num%10; //12%10 =2
    let res = '';

    if(rem == 1){
        res = `${num}st`;
    }else if(rem == 2){
        res = `${num}nd`;
    }else if(rem == 3){
       res = `${num}rd`;
    }else if(num == 11){
       res = `${num}th`;
    }else if(num == 12){
       res = `${num}th`;
    }else if(num == 13){
       res = `${num}th`;
    }else{
       res = `${num}th`;
    }

    return res;
  }

}
