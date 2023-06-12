import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Inject }  from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
   @ViewChild('test', { static: true }) p: ElementRef;

ngAfterViewInit() {
      // this.input is NOW valid !!
 // this.p.nativeElement.innerHTML='Hello World'
   }

onClick() {
  var x =  this.p.nativeElement.innerHTML
        this.p.nativeElement.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>'



}
}

