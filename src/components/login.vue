	<template>
		<div>
			<header class="header">
		        <a href="/home" class="header-left">
		            <img src="/static/img/home.png">
		        </a>
		        <h3>登录</h3>
		        <a href="http://localhost:8080/#/register" class="header-div-right">注册</a>
		    </header>
		    <div id="leftTabBox" class="tabBox">
		    	<ul>
					<router-link to="/passwordlogin" activeClass="active" tag="li">密码登录</router-link>
					<router-link to="/messagelogin" activeClass="active" tag="li">短信登录</router-link>
				</ul>
				<div class="frombox">
					<div class="up up3">
						<input type="text" name="telephoneNumber" placeholder="请输入手机号" class="phone" id="phone2">
						<div class="huoqu">
                           <input type="password" name="yanzhengma" placeholder="请输入密码" id="yanzhengma2">
                           <input type="button" id="btn-huoqu2" name="button" value="忘记密码?" placeholder="忘记密码?">
                    	</div>
					</div>
					
				</div>
		    </div>
			<input type="button" id="loginBtn" name="submit" value="确认">
			<div class="bottom">
					<div class="input-checkbox">
                        
                        <i id="autoLogin" class="icon iconfont icon-success"></i>
                        <span>一个月内记住登录</span>
                    </div>
			<a href="/#/register" class="register" style="top: 5.52rem;">快速注册</a>
			</div>

			<router-view></router-view>
		</div>
	</template>
	<script type="text/javascript">
		export default{
			data(){
				return {

				}
			}
		} 
	</script>
	<style type="text/css" scoped>
		.header {
		    background: #fff;
		    height: 0.44rem;
		    line-height: 0.44rem;
		    box-sizing: border-box;
		    display: block;
		    position: relative;
		    padding: 0rem 0.1rem 0rem 0.1rem;
		    border-bottom: 1px solid #f5f5f5;
		}
		.header-left {
		    display: inline-block;
		    width: 0.32rem;
		    height: 0.32rem;
		    line-height: 0.25rem;
		    position: absolute;
		    left: 0.1rem;
		    top: 50%;
		    transform: translateY(-50%);
		}
		.header img {
		    display: inline-block;
		    width: 0.26rem;
		    margin-top: 0.03rem;
		    margin-bottom: 0.03rem;
		    vertical-align: middle;
		    border: 0;
		}
		.header h3 {
		    position: absolute;
		    left: 50%;
		    top: 50%;
		    transform: translate(-50%,-50%);
		    font-size: 0.17rem;
		    margin: 0;
		    padding: 0;
		    border: 0;
		}
		.header-div-right {
			cursor: pointer;
		    display: inline-block;
		    position: absolute;
		    height: 0.32rem;
		    line-height: 0.32rem;
		    font-size: 0.15rem;
		    right: 0.1rem;
		    top: 50%;
		    transform: translateY(-50%);
		    color: #2C3030;
    		text-decoration: none;
		}
		#leftTabBox {
		    width: 3.45rem;
		    margin: 0 auto;
		    background-color: #fff;
		    margin-top: 0.15rem;
		    height: 1.45rem;
		}
		.frombox {
     		position: relative; 
		    width: 3.45rem;
		}
		.up {
		    width: 3.45rem;
		    padding: 0 0.15rem;
		    box-sizing: border-box;
		    background-color: #fff;
		    z-index: 5;
		    color: #000;
		    margin: 0 auto;
		}
		.up input {
		    width: 100%;
		    height: 0.5rem;
		    border:none;
		    font-size: 0.14rem;
		    color: #000;
		    font-family: 'PingFangSC-Regular';
		    outline: none;
		    border-bottom: 1px solid #EAEAEA;
		}
		.huoqu {
		    position: relative;
		}
		input[name="yanzhengma"] {
		    border: none;
		}
		.up input[name="button"] {
		    width: 1rem;
		    height: 0.5rem;
		    border: none;
		    position: absolute;
		    right: 0rem;
		    top: 0;
		    padding: 0;
		    text-align: right;
		    background-color: #fff;
		}
		input[name="submit"] {
		    margin: 0 auto;
		    vertical-align: middle;
		    width: 3.45rem;
		    height: 0.44rem;
		    background-color: #FFD444;
		    font-size: 0.14rem;
		    position: absolute;
		    top: 2.19rem;
		    left: 50%;
		    transform: translateX(-50%);
		    input: outline;
		    cursor: pointer;
		    border: none;
		}
		.bottom{
			position: relative;
			width: 3.45rem;
			margin-top: 0.64rem;
		}
		.input-checkbox {
		    position: relative;
		    font-size: 0.14rem;
		    top: 0.02rem;
		    left: 0.2rem;
		  	display: inline-block;
		    list-style: none;
		   /*  left: 50%;
		    transform: translateX(-50%); */
		}
		.register{
			display: inline-block;
			text-decoration: none;
			color: #000;
			float: right;
			font-size: 0.14rem;
		}
		ul{
			display: flex;
		}
		li{
			flex:1;
			text-align: center;
			height: 0.44rem;
			line-height: 0.44rem;
			margin: 0 0.46rem;
		    font-size: 0.14rem;
		    padding: 0 0.12rem;
		}
		.active{
			border-bottom: 0.03rem solid #202020;
			color: #000;
		}
	</style>