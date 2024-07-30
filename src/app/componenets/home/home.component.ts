import { Component } from '@angular/core';
import { GetdataService } from '../../getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dataArr:any

  constructor(private _getdataService: GetdataService) {

  }

  getData() {
    this._getdataService.requestData().subscribe((data) => {
      this.dataArr = data
    })
  }

}
