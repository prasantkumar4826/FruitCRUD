import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FruitsService } from '../fruits/fruit.service';
import { Fruits } from '../fruits/fruits';

@Component({
  selector: 'app-early-warning-alert',
  templateUrl: './early-warning-alert.component.html',
  styleUrls: ['./early-warning-alert.component.css']
})
export class EarlyWarningAlertComponent implements OnInit {
  view = 'list';
  alertEditId: any;
  allFruits: Fruits[] = [];
  DeleteID: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fruitService: FruitsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['view'] === 'add') {
        this.view = 'add';
      } else if (params['id'] !== undefined) {
        this.alertEditId = params['id'];
        console.log(this.alertEditId, 'My edit iD is ');
        this.view = 'add';
      } else {
        this.view = 'list';
        this.get();
       // this.getAlertRuleListData();
      }
    });
  }

  get() {
    this.fruitService.get().subscribe((data) => {
      this.allFruits = data;
    });
  }

  delete() {
    this.fruitService.delete(this.DeleteID).subscribe({
      next: (data) => {
        this.allFruits = this.allFruits.filter(_ => _.id != this.DeleteID)
      },
    });
  }

}
