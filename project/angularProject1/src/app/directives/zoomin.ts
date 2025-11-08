import { Directive ,HostBinding,HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appZoomin]'
})
export class Zoomin {

  constructor(private ele: ElementRef) { //Dependency injection
    
   }
   @HostListener('mouseenter') onMouseEnter(){
    this.ele.nativeElement.style.transform = 'scale(100%,110%)'
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.ele.nativeElement.style.transform = 'scale(100%)'
   }

}
