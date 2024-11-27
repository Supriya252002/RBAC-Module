import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Role } from '../../shared/models/role.model';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roles: Role[] = [
    { 
      id: 1, 
      roleName: 'Admin', 
      permissions: { read: true, write: true, delete: true } 
    },
    { 
      id: 2, 
      roleName: 'User', 
      permissions: { read: true, write: false, delete: false }     }
  ];
  
  constructor() {}

  getRoles(): Observable<Role[]> {
    return of(this.roles);
  }

  addRole(role: Role): Observable<Role> {
    role.id = this.roles.length + 1;
    this.roles.push(role);
    return of(role);
  }

  updateRole(role: Role): Observable<Role> {
    const index = this.roles.findIndex(r => r.id === role.id);
    if (index !== -1) {
      this.roles[index] = role;
    }
    return of(role);
  }


  deleteRole(id: number): Observable<void> {
    const index = this.roles.findIndex(r => r.id === id);
    if (index !== -1) {
      this.roles.splice(index, 1);
    }
    return of();
  }
}

