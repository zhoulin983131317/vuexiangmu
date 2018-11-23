<template>
<div>
	<div class="all">
		<header>
			<div>
				<img src="../assets/search.png">
				<input type="text" placeholder="搜索我的尖叫好物">
			</div>
		</header>
		<div class="tab">
			<img src="../assets/furniture.png">
			<ul>
				<li @click="handClick(20,'沙发')"><span>沙发</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick(21,'椅凳')"><span>椅凳</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick(22,'桌几')"><span>桌几</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick(2310,'床')"><span>床</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick(24,'柜架')"><span>柜架</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick(2210,'餐桌')"><span>餐桌</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick(2211,'茶几和边桌')"><span>茶几和边桌</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick(2212,'书桌')"><span>书桌</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick(2414,'隔断')"><span>隔断</span><i class="iconfont icon-more"></i></li>
				
			</ul> 	
		</div>
		<div class="tab">
			<img src="../assets/household.png">
			<ul>
				<li @click="handClick2(25,'灯具')"><span>灯具</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick2(26,'用餐')"><span>用餐</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick2(32,'时尚生活')"><span>时尚生活</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick2(27,'烹饪')"><span>烹饪</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick2(28,'纺织品')"><span>纺织品</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick2(29,'家饰')"><span>家饰</span><i class="iconfont icon-more"></i></li>
				<li @click="handClick2(31,'卫浴')"><span>卫浴</span><i class="iconfont icon-more"></i></li>
			</ul>
		</div>
	</div>
</div>
</template>
<script>

import Allrouter from "../router"

export default {
	data(){
		return{

		}
	},

	methods:{
		handClick(id,title){
			// console.log(id);
			// console.log(title)
			// this.$store.commit("sentShow","false")
			this.$emit("isShow","false")
			this.$store.commit("sentNum",id)
			this.$store.commit("sentTitle",title)

			Allrouter.push("/inner")
		},

		handClick2(id,title){
			// this.$emit("isShow","false")
			this.$store.commit("sentNum",id)
			this.$store.commit("sentTitle",title)

			Allrouter.push("/inner2")
		}
	}
}
</script>

<style scoped>
	.all{
		padding:0 .15rem 1rem .15rem;
	}

	header{
		background: #fff;
	    height: 0.44rem;
	    line-height: 0.44rem;
	    position: relative;
	}

	header div{
		display: inline-block;
		width: 2.7rem;
	    height: 0.28rem;
	    line-height: 0.28rem;
	    vertical-align: middle;
	    background-color: #F5F5F5;
	    border-radius: 0.15rem;
	    /*margin-left: 0.07rem;*/
	    margin-bottom: 0.02rem;
	}

	header div img{
		display: inline-block;
	    width: 0.2rem;
	    vertical-align: middle;
	    margin: 0 0.05rem;
	}

	header div input{
		background-color: #F5F5F5;
	    display: inline-block;
	    width: 80%;
	    height: 0.27rem;
	    border: none;
	    outline: none;
	}

	.tab img{
		width: 100%;
		display: block;
	}

	.tab{
		margin-top: .1rem;
	}

	.tab li{
		line-height: 0.5rem;
	    font-size: 0.15rem;
	    color: #000;
	    border-bottom: 1px solid #eaeaea;
	    text-indent: 0.15rem;
	    overflow: hidden;
	}

	.tab li span{
		display: block;
	    color: #202020;
	    overflow: hidden;
	    width: 80%;
	    font-family: 'Microsoft YaHei', Tahoma, Arial, sans-serif;
	    float: left;
	}	

	.tab li i{
		float: right;
    	color: #ccc;
    	font-size: 0.2rem;
	}
</style>