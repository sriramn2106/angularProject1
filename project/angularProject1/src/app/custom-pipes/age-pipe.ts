import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dateString : string) {


    // const [day, month, year] = dateString.split('-').map(Number);

    // const inputDate = new Date(year, month - 1, day);
    // const today = new Date();
    // const currentMonth = today.getMonth();
    // const inputMonth = inputDate.getFullYear();
    // const currentDay = today.getDay();
    // const inputDay = inputDate.getDay();
    // let age ;

    
    // if(currentMonth>=inputMonth && currentDay>=inputDay){  
    //   age = today.getFullYear() - inputDate.getFullYear();
    // }else{
    //   age = today.getFullYear() - inputDate.getFullYear()-1;
    // }
    

    // return `${age} years old`;

  const [day, month, year] = dateString.split('-').map(Number);

  const inputDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - inputDate.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > inputDate.getMonth() ||
    (today.getMonth() === inputDate.getMonth() && today.getDate() >= inputDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return `${age} years old`;
  }

}
