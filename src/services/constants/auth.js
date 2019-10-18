
export const LOGIN = [ // key, label, rule, type, placeholder
    ['email', 'Email', 'required|email', '', '', { icon: 'user', iconPosition: 'left' }],
    ['password', 'Password', 'required', 'password', '', { icon: 'lock', iconPosition: 'left' }],
];
export const REGISTER = [
    ['username', 'User Name', 'required', '', 'Enter your name here'],
    ['password', 'Password', 'required', 'password', ''],
    ['email', 'Email', 'required|email', '', ''],
];
