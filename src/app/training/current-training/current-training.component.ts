import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { TrainingService } from '../exercise.service';

//import { MatDialog } from '@angular/material';
//import { StopTrainingComponent } from 'src/app/training/current-training/stop-training.component'; 

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() Exittraining = new EventEmitter();
  progress = 0;
  timer: number;

  constructor(private trainingService : TrainingService) { }

  ngOnInit() {
    
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }

    }, 1000);

  }

  OnClickStop() {
    clearInterval(this.timer)
    alert("are you sure ?");
    this.Exittraining.emit();

  }
}