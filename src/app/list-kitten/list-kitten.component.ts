import { Component } from '@angular/core';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {

 kittenList:string[]=[""];

 onReceiveKittenInfo(kitten: string) { /* con esta función se recupera el valor recibido y se inserta en onomatopiaList. se puede poner cualquier nombre al parámetro, ya que será la información que llegará y se albelgará en la lista con el método push*/
   /*  const filteredKittenList = this.kittenList.filter(element => element !== "");
    this.kittenList=filteredKittenList; */
    this.kittenList.push(kitten);

  }

  check() {console.log(this.kittenList)
  }
}