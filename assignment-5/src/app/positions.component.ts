
import { Component, OnInit } from '@angular/core';
import { Position}from "./data/position";
import { PositionService } from './data/position.service';


@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions:Position[];
  getPositionsSub: any;
  loadingError:boolean=false;
  constructor(private PosService:PositionService) { }

  ngOnInit() {
    this.getPositionsSub = this.PosService.gePositions().subscribe(data=>{
      this.positions=data;
    },error=>{
      this.loadingError=true;
    })
    
  }
  ngOnDestroy(){
    if(this.getPositionsSub) this.getPositionsSub.unsubscribe();
  }

}