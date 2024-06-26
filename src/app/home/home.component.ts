import { Component } from '@angular/core';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { AccountService } from '@app/_services';

export interface PeriodicElement {
  title: string;
  author: string;
}

@Component({
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html',
})
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

  displayedColumns: string[] = ['title', 'author'];
  dataSource = [];

  ngOnInit() {
    const result = this.accountService.getBooks().subscribe({
      next: (response) => {
        this.dataSource = response;
      },
      error: (err) => {
        console.error('Error fetching data', err);
      },
    });
  }
}
