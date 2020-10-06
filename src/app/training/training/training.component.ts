import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../exercise.service';
import {Subscription } from 'rxjs';
  import { from } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

   subsexrcise ;

  constructor(private trainingService : TrainingService){}

  ongoingTraining = false;
  

  ngOnInit(){
    this.subsexrcise  = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        if(exercise){
          this.ongoingTraining = true ;
        }
        else{
          this.ongoingTraining = false;
        }
      }
    );
  }

}
