const ROUTE = Object.freeze({
  HOME: '/',
  CALENDAR: '/calendar',
  COMMUNITY: {
    BASE: '/community',
    LIST: '',
    WRITE: 'write',
    DETAIL: ':id',
    NOT_FOUND: '404-not-found',
  },
  LOGIN: '/login',
  SIGNUP: '/signup',
  ENTERINFO: '/enterinfo',
  ADMIN: {
    BASE: '/admin',
    APPROVAL: 'approval',
    INFO: 'info',
    CHANGE: 'change',
  },
  PROFILE: {
    BASE: '/mypage',
    MYINFO: 'myinfo',
    MYWRITINGS: 'mywritings',
    MYCOMMENTS: 'mycomments',
  },
  TEMP: {
    BASE: '/temp',
    APPLE: 'apple',
    BANANA: 'banana',
    MANGO: 'mango',
  },
});

export default ROUTE;
