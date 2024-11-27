import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Role } from '../../shared/models/role.model';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  roles: Role[] = [];
  editingRole: Role | null = null;
  newRole: boolean = false;
  currentRole: Role = {
    id: undefined,
    roleName: '',
    permissions: { read: false, write: false, delete: false }
  };
  roleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roleForm = this.fb.group({
      roleName: ['', Validators.required],
      permissions: this.fb.group({
        read: [false],
        write: [false],
        delete: [false]
      })
    });
  }

  ngOnInit(): void {
    this.roles = [
      {
        id: 1,
        roleName: 'Admin',
        permissions: { read: true, write: true, delete: true }
      },
      {
        id: 2,
        roleName: 'Editor',
        permissions: { read: true, write: false, delete: false }
      }
    ];
  }

  // Add a new role
  addRole() {
    this.newRole = true;
    this.currentRole = { id: undefined, roleName: '', permissions: { read: false, write: false, delete: false } }; // Reset form
    this.roleForm.reset();
  }

  // Save role (both add and edit)
  saveRole() {
    const formValue = this.roleForm.value;
    this.currentRole.roleName = formValue.roleName;
    this.currentRole.permissions = formValue.permissions;

    if (this.newRole) {
      // Add new role
      const newRole: Role = {
        ...this.currentRole,
        id: this.roles.length + 1
      };
      this.roles.push(newRole);
    } else if (this.editingRole) {
      // Edit existing role
      const index = this.roles.findIndex(role => role.id === this.editingRole!.id);
      if (index !== -1) {
        this.roles[index] = { ...this.currentRole };
      }
    }

    // Reset after saving
    this.cancelEdit();
  }

  // Edit an existing role
  editRole(role: Role) {
    this.editingRole = { ...role };
    this.currentRole = { ...role };
    this.newRole = false;
    this.roleForm.patchValue(role);
  }

  // Cancel the editing or adding process
  cancelEdit() {
    this.editingRole = null;
    this.newRole = false;
    this.currentRole = { id: undefined, roleName: '', permissions: { read: false, write: false, delete: false } };  
    this.roleForm.reset();
  }

  // Delete a role
  deleteRole(roleId: number | undefined) {
    if (roleId !== undefined) {
      const index = this.roles.findIndex(role => role.id === roleId);
      if (index !== -1) {
        this.roles.splice(index, 1);
      }
    } else {
      console.warn('Role ID is undefined');
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.roleForm.valid) {
      const roleData = this.roleForm.value;
      console.log(roleData);

    }
  }
}
