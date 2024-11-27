export interface Role {
  id: number|undefined;
  roleName: string;
  permissions: {
    read: boolean;
    write: boolean;
    delete: boolean;
  }
  
}
