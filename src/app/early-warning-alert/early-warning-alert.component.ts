import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-early-warning-alert',
  templateUrl: './early-warning-alert.component.html',
  styleUrls: ['./early-warning-alert.component.css']
})
export class EarlyWarningAlertComponent implements OnInit {
  view = 'list';
  alertEditId: any;

  constructor(
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['view'] === 'add') {
        this.view = 'add';
      } else if (params['id'] !== undefined) {
        this.alertEditId = params['id'];
        this.view = 'add';
      } else {
        this.view = 'list';
       // this.getAlertRuleListData();
      }
    });
  }

}
