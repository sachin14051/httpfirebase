import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Ipost } from '../../model/Ipost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  allpost : Array<any>=[]
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {

    this.getposts()
    
    
  }

  getposts() {
   return  this._dataService.getAllposts()
    .subscribe((res) =>{
       return this.allpost= (res)
    })
    
      
  }


  onEdit(id:string){
     this._dataService.editPost(id)
     .subscribe(res =>console.log(res))
     
  }
}
