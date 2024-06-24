// types/types.ts
export interface Student {
    id: string;
    registration: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface StudentData {
    students: Student[];
    meta: {
      totalItems: number;
      currentPage: number;
      pageSize: number;
      totalPages: number;
    };
  }
  