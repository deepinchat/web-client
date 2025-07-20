export interface FormValidationError {
    propertyName: string;
    errors: string[];
}

export interface ApiErrorResult {
    message: string;
    validationErrors?: FormValidationError[];
    hasValidationErrors: boolean;
}