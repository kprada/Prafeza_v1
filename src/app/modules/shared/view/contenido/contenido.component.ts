
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy,OnInit} from '@angular/core';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  isCollapsed = false;


  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);





  constructor( media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

  }



  ngOnInit(): void {
  }

}
