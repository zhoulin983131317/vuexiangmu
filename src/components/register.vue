	<template>
	<div class="all">
		<header class="header">
			<h3>注册</h3>
			<a href="http://localhost:8080/#/login" class="header-div-right">登录</a>
		</header>
		<div class="frombox" id="captchaForm">
			<div class="up3 up">
				<table>
					<tbody>
						<tr>
							<td>
								<input type="text" name="telephoneNumber" placeholder="请输入手机号" class="phone" id="phone">
							</td>
						</tr>
						<tr>
							<td>
								<input type="text" name="captcha" placeholder="请输入图形验证码" id="captcha">
								<img id="imgObj" alt="" src="https://m.wowdsgn.com/captcha/renew">
								<a href="#" id="renew">换一张</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<input id="submit" type="button" name="submit" value="注册">
		</div>
	</div>
	</template>

	<script type="text/javascript">
		export default{

		} 
	</script>

	<style type="text/css" scoped>
	.all{
		font-size: 0.16rem;
		user-select: none;
		background-color: #f5f5f5;
		font-family: "PingFangSC-Regular", "STHeiti", "Microsoft YaHei", Helvetica, Arial, sans-serif;
		margin: 0;
		box-sizing: border-box;
	}
	.header{
		background: #fff;
	    height: 0.44rem;
	    line-height: 0.88rem;
	    position: relative;
	    padding: 0rem 0.1rem 0rem 0.1rem;
	    border-bottom: 1px solid #f5f5f5;
	}
	.header h3{
		position: absolute;
	    left: 50%;
	    top: 50%;
	    font-size: 0.17rem;
	    margin: 0;
	    padding: 0;
	    border: 0;
	    display: block;
	    font-weight: bold;
	    transform: translate(-50%,-50%);
	}
	.header a{
		color: #2C3030;
    	text-decoration: none;
	}
	.header-div-right{
		display: inline-block;
	    position: absolute;
	    height: 0.32rem;
	    line-height: 0.32rem;
	    font-size: 0.15rem;
	    right: 0.1rem;
	    top: 50%;
	    transform: translateY(-50%);
	}
	.frombox{
		position: relative;
	    width: 3.45rem;
	    height: 2.1rem;
	    margin: 0 auto;
	}
	.up{
		width: 3.45rem;
    	padding: 0 0.15rem;
    	box-sizing: border-box;
    	background-color: #fff;
	    z-index: 5;
	    color: #000;
	    margin: 0.15rem auto;
	}
	.up table{
		border-collapse: collapse;
    	border-spacing: 0;
    	border-color: grey;
	}
	.up table tbody {
	    display: table-row-group;
	    vertical-align: middle;
	    border-color: inherit;
	}
	.up table tbody tr {
	    display: table-row;
	    vertical-align: inherit;
	    border-color: inherit;
	}
	.up table tbody tr td{
		display: table-cell;
    	vertical-align: inherit;
	}
	.up table tbody tr td input {
	    width: 100%;
	    height: 0.5rem;
	    line-height: 0.5rem;
	    font-size: 0.14rem;
	    color: #000;
	    font-family: 'PingFangSC-Regular';
	    outline: none;
	    border:none;
	 }
	.up table tr:nth-child(2) {
    	border-top: 1px solid #EAEAEA;
	}
	.up table input[name="captcha"] {
	    width: 42%;
	    margin-right: 0.1rem;
	}
	#imgObj {
	    vertical-align: middle;
	    margin-right: 0.13rem;
	    border: 0;
	}
	#renew {
    	font-size: 0.14rem;
		color: #2C3030;
	    text-decoration: none;
	}
	
	input[type="button"] {
		cursor: pointer;
	}
	input[name="submit"] {
	    margin: 0 auto;
	    vertical-align: middle;
	    width: 3.45rem;
	    height: 0.44rem;
	    background-color: #FFD444;
	    font-size: 0.14rem;
	    position: absolute;
	    left: 50%;
	    bottom: 0.08rem;
	    -webkit-transform: translateX(-50%);
	    outline: none;
	    border: none;
	}
	</style>