import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { KittenCard } from '../models/kitten-card';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit{
  
  @Output() /* 1 - Se empieza por preparar el componente hijo */
  kittenformInfo: EventEmitter<FormGroup> = new EventEmitter()
  
  
  kittenform = this.fb.group({
  name: [""],
  race: [""],
  dateOfBirth : [""],
  photo: [""],  
  });

  constructor(private fb: FormBuilder) { }

  onSubmit () {
     /* esta función va a servir para introducir la información precisa. Servirá para recuperar el valor del input, que se almacenará en newOnomatopia y que será de tipo string, que habrá que subir al compo padre*/ 
    const model:KittenCard = this.kittenform.value;
     const modelString = JSON.stringify(model);
     this.kittenformInfo.emit(modelString);
     console.log(this.kittenform);
   ; 
    
  }
  sendKittenInfos () {
     

  }
  ngOnInit(): void {
      
  }

}

