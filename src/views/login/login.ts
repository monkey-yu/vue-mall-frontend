import Vue from 'vue';
import Component from 'vue-class-component';
import { UserInfoBusiness } from '../../business';
@Component({})
export default class Login extends Vue {
  slogan:string = '欢迎登陆后台管理系统';
  username: string ='admin';
  password:string = 'pass';
  created() {

  }
  login(){
    if(!this.username || !this.password) {
      return
    }
    // 业务请求login
    UserInfoBusiness.login(this.username,this.password).then( res => {
      console.log('1',res);
    })
  }
}
