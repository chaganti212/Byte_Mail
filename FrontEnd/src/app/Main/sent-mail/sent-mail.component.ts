import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main.js";
import {sentservice} from './sent-mail.service';
@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css'],
  providers:[sentservice]
})
export class SentMailComponent implements OnInit {
    private gridOptions: GridOptions;
    public rowData:any[];
    public columnDefs:any[];
    //public columnDefs1: any[];
  constructor(private SentService: sentservice) {}
  ngOnInit() {
  var obj = this.SentService.sentemaillist();
  console.log(obj);
  this.gridOptions = <GridOptions>{};
    this.columnDefs= [{headerName: "SentTo", field: "SentTo"},{headerName: "Subject", field: "Subject"},{headerName: "SentOn", field: "DateSent"}];
    this.rowData= obj;
  }

}
