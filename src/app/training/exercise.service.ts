import { Exercise } from './exercise.model';
import{ Subject } from 'rxjs' ;


export class TrainingService{

    exerciseChanged = new Subject<Exercise>();

    private availableExercise : Exercise[] = [
        { id: 'crunches' ,name:'crunches' , duration:30 , calories: 8 } ,

        { id: 'touch-toes' ,name:'touch-toes' , duration:10 , calories: 17 } ,

        { id: 'side-lunges' ,name:'side-lunges' , duration:15 , calories: 50 } ,

        { id: 'burpees' ,name:'burpees' , duration:15 , calories: 25 } ,
    ] ;


    private runningExercise :Exercise

    getAvailableExercises(){
        return this.availableExercise.slice();
    }

    startExercise(SelectedId : string){
        this.runningExercise = this.availableExercise.find(ex => ex.id === SelectedId ) ;

        

        this.exerciseChanged.next({...this.runningExercise});
    }


    getRunningExercise(){
        return {...this.runningExercise} ;
    }

}