import { User } from "../../shared/entities/User";

export interface TokenResponse {
    success: boolean;
    message: string;
    expired?: boolean;
    error?:   TokenError;
    data?: User;
}

export interface TokenError {
    name:      string;
    message:   string;
    expiredAt: Date;
}
