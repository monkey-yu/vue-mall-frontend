export interface Messages {
  info: {
    deleteConfirm: string;
    noMoreData: string;
    noResult: string;
    slogan: string;
    showMore: string;
    success: string;
    notAuthorized: string;
    pageNotFound: string;
  };
  validation: {
    invalidFormat: string
    passwordNotMatch: string
    inputRequiredField: string
  };
}

export interface Controls {
  buttons: {
    cancel: string;
    back: string;
    edit: string;
    delete: string;
    home: string;
    login: string
    new: string;
    ok: string;
    permission: string;
    reset: string
    search: string;
    save: string;
    select: string;
    users: string
  };
  columns: {
    title;
    amount;
    date;
    id;
  };
  labels: {
    title: string;
    userName: string;
    password: string;
  };
  languages: any[];
  navigatorMenus: any[];
  userMenus: any[];
}
