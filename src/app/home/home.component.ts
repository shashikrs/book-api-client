import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { AccountService } from '@app/_services';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  account = this.accountService.accountValue;

  constructor(private accountService: AccountService) {}

  // form!: FormGroup;
  // submitting = false;
  // submitted = false;

  // constructor(
  //     private formBuilder: FormBuilder,
  //     private route: ActivatedRoute,
  //     private router: Router,
  //     private accountService: AccountService,
  //     private alertService: AlertService
  // ) { }

  ngOnInit() {
    this.accountService.getBooks().pipe().subscribe();
  }
}
@Component({
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
}
