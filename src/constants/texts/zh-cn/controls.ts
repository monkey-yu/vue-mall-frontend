import { Controls } from '../text-interface';

export const ZHCNCONTROLS: Controls = {
  buttons: {
    back: '返回',
    cancel: '取消',
    delete: '删除',
    edit: '编辑',
    home: '主页',
    login: '登录',
    new: '添加',
    ok: '确定',
    permission: '权限',
    reset: '重置',
    save: '保存',
    search: '搜索',
    select: '选择',
    users: '用户'
  },
  columns: {
    title: '标题',
    amount: '金额',
    date: '日期',
    id: 'Id'
  },
  labels: {
    title: '标题',
    userName: '用户名',
    password: '密码'
  },
  languages: [
    { name: 'zh-cn', text: '中文' },
    { name: 'en-us', text: 'English' }
  ],
  navigatorMenus: [
    { name: 'home', text: '主页' },
    { name: 'authTest', text: '权限测试' }
  ],
  userMenus: [
    { name: 'language', text: '语言' },
    { name: 'logout', text: '退出' }
  ]
};
