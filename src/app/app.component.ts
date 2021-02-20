import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _electronService: ElectronService) {}

  ngOnInit() {
    console.log(`This is an Electron App: ${this._electronService.isElectronApp}`)
  }
}
