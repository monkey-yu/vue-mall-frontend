<template>
  <div class="login-view">
    <div class="login-box">
      <div class="login-content">
        <div class="logo-box">
          <span>{{slogan}}</span>
        </div>
        <div class="control-box">
          <span class="label-box">用户名：</span>
          <el-input class="text-control" type="text" v-model="username" @keyup.enter="login()" placeholder="请输入用户名"></el-input>
        </div>
        <div class="control-box">
          <span class="label-box">密码：</span>
          <el-input class="text-control" type="password" v-model="password" @keyup.enter="login()" placeholder="请输入密码"></el-input>
        </div>
        <div class="bottom-box">
          <button type="button" class="btn login-button" @click="login()">登陆</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" src="./login.ts"></script>
<style lang="scss" src="./login.scss"></style>
