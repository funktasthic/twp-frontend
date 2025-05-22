export interface ApiResponse {
    success?: boolean;
    message?: string;
    data?: any;
    errors?: Error[];
    error?: string;
}

export interface ApiError {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}