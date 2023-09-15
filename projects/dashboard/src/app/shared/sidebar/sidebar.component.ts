import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarVisible: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this._authService.logout();
  }
}
