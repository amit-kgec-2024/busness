import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NavItem {
  id: number;
  title: string;
  link: string;
  dropdown: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavDataService {
  private dataUrl = 'assets/data/navData.json'; 

  constructor(private http: HttpClient) { }

  getNavData(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>(this.dataUrl);
  }
}
