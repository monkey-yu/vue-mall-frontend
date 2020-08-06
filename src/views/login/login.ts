import Vue from 'vue';
import Component from 'vue-class-component';
import {userInfoBusiness} from '../../business';
@Component({})
export default class Login extends Vue {
  slogan:string = '欢迎登陆后台管理系统';
  username: string ='admin';
  password:string = '';
  created() {

  }
  login(){
    if(!this.username || !this.password) {
      return
    }
    userInfoBusiness.login(this.username,this.password).then( res => {
      console.log('1',res);
    })
  }
}
