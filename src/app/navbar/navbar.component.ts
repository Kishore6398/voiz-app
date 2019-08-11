import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	testForm: FormGroup;
	  optionsSelect = [
	    { value: '1', label: 'Option 1' },
	    { value: '2', label: 'Option 2' },
	    { value: '3', label: 'Option 3' },
	  ];
  constructor() { }

  ngOnInit() {
    this.testForm = new FormGroup({
      testSelect: new FormControl('1')
    });

}
}