import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-data-table',
  templateUrl: './ngx-data-table.component.html',
  styleUrls: ['./ngx-data-table.component.less']
})
export class NgxDataTableComponent implements OnInit {

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  constructor() { }

  ngOnInit(): void {
  }

}
