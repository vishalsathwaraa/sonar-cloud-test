export const ROLE = {
    ADMIN : 'admin',
    USER : 'user',
    GUEST : 'guest',
    SUPER_AMDING : 'super',
}

export default function trimString(str: string): string {
    return str.replace(/^\s+|\s+$/g, '');
}