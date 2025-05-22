import { Address } from "./Address";

export interface User {
    id?: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    image?: string;
    password: string;
    confirmPassword?: string;
    token?: string;
    role_name?: string;
    role_id?: number;
    address?: Address;
}