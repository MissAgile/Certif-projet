import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
//   dtOptions: DataTables.Settings = {};

//   ngOnInit(): void {
//     this.dtOptions = {
//       pagingType: 'full_numbers'
//     };
  
// }
}
