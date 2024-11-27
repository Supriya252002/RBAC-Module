import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { Role } from '../../shared/models/role.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', roles: ['Admin'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', roles: ['User'] },
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);  
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    return of(user);  
  }

  addUser(user: User): Observable<User> {
    user.id = this.users.length + 1;  
    this.users.push(user);
    return of(user);  
  }

  updateUser(user: User): Observable<User> {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user; 
    }
    return of(user); 
  }

  deleteUser(id: number): Observable<void> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);  
    }
    return of(); 
  }

}
