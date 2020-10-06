import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../exercise.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  

  exercise :Exercise[] = [] ;

  constructor(private trainingService : TrainingService) { }

  ngOnInit(): void {
    this.exercise = this.trainingService.getAvailableExercises();
  }

  onstartTraining(form : NgForm)  {
    this.trainingService.startExercise(form.value.exercise) ;
  }

}
