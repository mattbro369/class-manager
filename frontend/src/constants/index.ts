import { GraduationCap, School } from 'lucide-react'

export const USER_ROLES = {
    STUDENT: 'student',
    TEACHER: 'teacher',
    ADMIN: 'admin',
}

export const ROLE_OPTIONS = [
    {
        value: USER_ROLES.STUDENT,
        label: 'Student',
        icon: GraduationCap,
    },
    {
        value: USER_ROLES.TEACHER,
        label: 'Teacher',
        icon: School,
    },
]

export const DEPARTMENTS = [
    'Computer Science',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'History',
    'Geography',
    'Economics',
    'Business Administration',
    'Engineering',
    'Psychology',
    'Sociology',
    'Political Science',
    'Philosophy',
    'Education',
    'Fine Arts',
    'Music',
    'Physical Education',
    'Law',
] as const

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}))

export const MAX_FILE_SIZE = 3 * 1024 * 1024 // 3MB in bytes
export const ALLOWED_TYPES = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
]

/**
 * Ensure a required environment variable is present.
 *
 * @param name - The environment variable name used in the error message when missing
 * @param value - The value to validate; considered missing if falsy
 * @throws Error if `value` is falsy with message "Missing required environment variable: <name>"
 */
function assertEnv(name: string, value: any) {
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`)
    }
}

export const CLOUDINARY_UPLOAD_URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL
export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

export const BASE_URL = import.meta.env.VITE_API_URL ?? BACKEND_BASE_URL
export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY
export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`

export const CLOUDINARY_UPLOAD_PRESET = import.meta.env
    .VITE_CLOUDINARY_UPLOAD_PRESET

// Validate required envs
assertEnv('VITE_CLOUDINARY_UPLOAD_URL', CLOUDINARY_UPLOAD_URL)
assertEnv('VITE_CLOUDINARY_CLOUD_NAME', CLOUDINARY_CLOUD_NAME)
assertEnv('VITE_BACKEND_BASE_URL', BACKEND_BASE_URL)
// assertEnv('VITE_ACCESS_TOKEN_KEY', ACCESS_TOKEN_KEY)
// assertEnv('VITE_REFRESH_TOKEN_KEY', REFRESH_TOKEN_KEY)
assertEnv('VITE_CLOUDINARY_UPLOAD_PRESET', CLOUDINARY_UPLOAD_PRESET)
