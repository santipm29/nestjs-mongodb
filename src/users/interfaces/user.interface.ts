import { Document } from "mongoose";
export interface User extends Document{
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone?: string;
    address?: string;
    createdAt: string;
    updatedAt: string;
}