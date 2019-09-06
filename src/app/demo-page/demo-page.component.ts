import { Component, OnInit } from '@angular/core';

import { Testimony } from '../models/testimony';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {

  readonly testimonies: Testimony[] = [
    {
      name: 'Commodo Sed',
      position: 'Eget Gravida',
      company: 'Purus',
      companyLogo: 'https://dummyimage.com/300x150/9c9c9c/ffffff.jpg&text=Company+Logo',
      photoUrl: 'https://dummyimage.com/500x500/9c9c9c/ffffff.jpg&text=Person',
      message: `
      Nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor
      id eu nisl nunc mi ipsum faucibus vitae.`
    },
    {
      name: 'Turpis Cursus',
      position: 'Egestas Fringilla',
      company: 'Urna Molestie',
      companyLogo: 'https://dummyimage.com/300x150/9c9c9c/ffffff.jpg&text=Company+Logo',
      photoUrl: 'https://dummyimage.com/500x500/9c9c9c/ffffff.jpg&text=Person',
      message: 'Purus in massa tempor nec feugiat nisl pretium fusce id velit ut!'
    },
    {
      name: 'Nisi Est',
      position: 'Sit Amet',
      company: 'Tristique',
      companyLogo: 'https://dummyimage.com/300x150/9c9c9c/ffffff.jpg&text=Company+Logo',
      photoUrl: 'https://dummyimage.com/500x500/9c9c9c/ffffff.jpg&text=Person',
      message: `Quis auctor elit sed vulputate mi, sit amet mauris commodo. Quis imperdiet
      massa tincidunt nunc pulvinar sapien et ligula.`
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
