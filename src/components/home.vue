	<template>
		<div class="all">
			<header class="header noborder">
				<img class="logo" src="../assets/titleView.png">
				<div id="searchInfor">
				    <img src="../assets/searchIcon-e103f6f03f8488bbc144da2ef8684396.png" id="searchIcon">
				    <input type="search" name="searchInput" id="searchInput" placeholder="搜索我的尖叫好物">
				</div>
			</header>

			<div class="hd">
	            <ul id="tabUl">
	            	<li><router-link to="/home/homechild" tag="a" activeClass="deepColor">推荐</router-link></li>
	            	
	                <router-link to="/home/furniture" tag="li" activeClass="deepColor"><a>家具</a></router-link>
	                <router-link to="/home/house" tag="li" activeClass="deepColor"><a>家居</a></router-link>
	                <router-link to="/home/activity" tag="li" activeClass="deepColor"><a>活动</a></router-link>
	            </ul>
	        </div>


	        <!-- 推荐-轮播图 -->
<!-- 	        <div class="swiper-containera">
	          <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="data in dataList">
	            	<img :src="data.bannerImgSrc" alt="">
	            </div>
	          </div>
	        </div> -->
	          <!-- Add Pagination -->
	          <!-- <div class="swiper-pagination"></div> -->
	          <!-- Add Arrows -->
	          <!-- <div class="swiper-button-next"></div> -->
	          <!-- <div class="swiper-button-prev"></div> -->
	        

	        <!-- 每天一个模块，今天的开始 -->
	        <router-view></router-view>


	        
	    </div>
	</template>
	<script>

	const axios = require('axios');
	// import homechild from "./homechild.vue"
	// import furniture from "./furniture.vue"
	export default {

		data(){
			return{
				dataList:[],
				timeNow:"",
				week:"",
				weekImg:"",
				weekList:[],
				allList:[]
			}
		},
		components:{
			// homechild,
			// furniture
		},
		mounted(){


			axios.get("/v2/page?pageId=1&tabId=1&_=1539762431332").then(res=>{
				console.log(res.data.data.modules)
				this.dataList = res.data.data.modules[0].moduleContent.banners
				this.$nextTick(res=>{
					
				})


				// this.week = res.data.data.modules[1].moduleDescription
				// this.weekImg = res.data.data.modules[1].moduleContent.banners[0].bannerImgSrc
				// this.weekList = res.data.data.modules[1].moduleContent.products
				this.allList = res.data.data.modules.slice(1)
				console.log(this.allList.length)



			}).catch(error=>{
				console.log(error)
			})
		}

	}

	</script>

	<style scoped>

		.all{background-color: #f5f5f5;}
		.deepColor{border-bottom:3px solid black;}
		.header {background: #fff;height: 0.48rem;line-height: 0.48rem;position: relative;padding: 0rem 0.2rem 0rem 0.2rem;border-bottom: 1px solid #f5f5f5;}
		.header img.logo {display: inline-block;width: 0.6rem;vertical-align: middle;}
		#searchInfor {display: inline-block;width: 2.1rem;height: 0.36rem;
		    line-height: 0.56rem;
		    vertical-align: middle;
		    background-color: #F5F5F5;
		    border-radius: 0.3rem;
		    margin-left: 0.15rem;
		    margin-bottom: 0.05rem;
		}
		#searchInfor input {
		    background-color: #F5F5F5;
		    position: absolute;
		    display: inline-block;
		    width: 1.7rem;
		    height: 0.24rem;
		    margin: 0;
		    padding:0;
		    border:none;
		    outline: none;
		    top:0.12rem;
		}
		#searchIcon {
		    /* display: inline-block; */
		    width: 0.2rem;
		    vertical-align: middle;
		    margin: -0.1rem 0 0.1rem 0.1rem;
		}
		.hd {
			/* overflow: hidden; */
			padding-bottom: .03rem;
		}
		.hd #tabUl {
			height:.4rem;
			line-height: .4rem;
			display: flex;
			background-color: white;
			
		}

		.hd #tabUl li{
			/* float: left; */
			flex:1;
			text-align: center;
			padding-left: .2rem;
			padding-right:.2rem;
		}

		.hd #tabUl li a{
			display: block;
			height: 100%;
			text-decoration: none;
			color: black
		}

		.blackColor{
			border-bottom: 2px solid black
		}

	</style>