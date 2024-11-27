import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../../shared/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  editingUser: User | null = null;
  newUser: boolean = false;
  currentUser: User = { name: '', email: '', status: 'Active', roles: [], id: undefined };
  userForm!: FormGroup;
  roles: any;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
    // Initialize form on component initialization
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      status: ['Active', Validators.required],
      roles: ['', Validators.required]
    });

    // Initialize with some mock data or fetch from an API
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', roles: ['Admin'] },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', roles: ['User'] }
    ];
  }

  // Add new user
  addUser(): void {
    this.newUser = true;
    this.currentUser = { name: '', email: '', status: 'Active', roles: [] };
  }

  // Save user (both add and edit)
  saveUser(): void {
    if (this.userForm.invalid) {
      return;
    }

    const formValue = this.userForm.value;
    this.currentUser = { ...this.currentUser, ...formValue };

    if (this.newUser) {
      // Add new user
      const newUser = { ...this.currentUser, id: this.users.length + 1 };
      this.users.push(newUser);
    } else if (this.editingUser) {
      // Edit existing user
      const index = this.users.findIndex(user => user.id === this.editingUser!.id);
      if (index !== -1) {
        this.users[index] = { ...this.currentUser };
      }
    }

    this.cancelEdit();
  }

  // Edit an existing user
  editUser(user: User): void {
    this.editingUser = { ...user };
    this.currentUser = { ...user };
    this.userForm.patchValue({
      name: this.currentUser.name,
      email: this.currentUser.email,
      status: this.currentUser.status,
      roles: this.currentUser.roles
    });
    this.newUser = false;
  }

  // Cancel the editing or adding process
  cancelEdit(): void {
    this.editingUser = null;
    this.newUser = false;
    this.currentUser = { name: '', email: '', status: 'Active', roles: [], id: undefined };
    this.userForm.reset();
  }


  // Delete a user
  deleteUser(userId: number): void {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
