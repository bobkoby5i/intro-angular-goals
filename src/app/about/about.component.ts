import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router) { 
    this._route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit(): void {

  }

  sendMeHome() {
    this._router.navigate(['']);
  }

}
