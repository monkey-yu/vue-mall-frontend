import { Controls } from '../text-interface';

export const ENUSCONTROLS: Controls = {
  buttons: {
    cancel: 'Cancel',
    back: 'Back',
    delete: 'Delete',
    edit: 'Edit',
    home: 'Home',
    login: 'Login',
    new: 'New',
    ok: 'Ok',
    permission: 'Permission',
    reset: 'Reset',
    users: 'Users',
    save: 'Save',
    search: 'Search',
    select: 'Select'
  },
  columns: {
    amount: 'Amount',
    date: 'Date',
    id: 'Id',
    title: 'Title'
  },
  labels: {
    title: 'Title',
    userName: 'User name',
    password: 'Password'
  },
  languages: [
    { name: 'zh-cn', text: '中文' },
    { name: 'en-us', text: 'English' }
  ],
  navigatorMenus: [
    { name: 'home', text: 'Home' },
    { name: 'authTest', text: 'Auth test' }
  ],
  userMenus: [
    { name: 'language', text: 'Language' },
    { name: 'logout', text: 'Log out' }
  ]
};
