import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {
 postForm !: FormGroup;
 userArray :Array<number>=[1,2,3,4,5,6,7,8,9]
  constructor(private _dataservice:DataService,
    private _router:Router) { }

  ngOnInit(): void {
    this.postForm= new FormGroup({
      title: new FormControl(null,[Validators.required]),
      content: new FormControl(null,[Validators.required]),
      userId: new FormControl(null,[Validators.required]),
    })
    
  }
  
  addForm(){
    if(this.postForm.valid){
      let post = this.postForm.value;
      this.postForm.reset();
      this._dataservice.addposts(post)
      .subscribe(res => console.log(res));
    }
    this._router.navigate(['posts'])
  }
 

}
