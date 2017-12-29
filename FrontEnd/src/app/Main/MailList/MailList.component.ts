import { Component,OnInit } from "@angular/core";
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main.js";
import {inboxservice} from './MailList.Service';


@Component({
    selector: 'app-maillist',
    templateUrl: './MailList.component.html',
    providers:[inboxservice]

})

export class MailListComponent{
    ngOnInit() {
      console.log("mail list initialized");
    }
    ngOnDestroy(){
      console.log("mail list destroyed");
    }

    private gridOptions: GridOptions;
    public rowData: any[];
    public columnDefs: any[];
    public suppressClickSelect:boolean;

    constructor() {
      this.gridOptions = <GridOptions>{};
      this.columnDefs=this.columnDefs1;
      this.rowData=this.rowData1;
      this.suppressClickSelect = true;
      
    }
   public columnDefs1 = [{headerName: "Make", field: "make", checkboxSelection:true,   headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true},{headerName: "Model", field: "model"},{headerName: "Price", field: "price"}];

    public rowData1 = [{make: "Toyota", model: "Celica", price: 35000},{make: "Ford", model: "Mondeo", price: 32000},{make: "Porsche", model: "Boxter", price: 72000}];

    addprop1(e){

    }
  }
