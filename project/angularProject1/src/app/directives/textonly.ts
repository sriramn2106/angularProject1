import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appTextonly]'
})
export class Textonly {
  @HostBinding('style.background-color')
  myBgCOLOR: string = '';

  @HostListener('keyup',['$event'])
  handleKeyUp(event:any){
    let regex = new RegExp(/^[a-z]*$/);
    if(!regex.test(event.target.value)){
      this.myBgCOLOR = 'red';
    }else {
      this.myBgCOLOR= 'cyan';
    }  
  }

}
