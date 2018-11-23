	<template>
		<div>


	        <div class="swiper-containera">
	          <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="data in dataList">
	            	<img :src="data.bannerImgSrc" alt="">
	            </div>
	          </div>
	        </div>


			<div class="banner-group-and-product" v-for="data in allList">

			        <div class="page-module-title">
			            <h1>{{data.moduleName}}</h1>
			            <h3>{{data.moduleDescription}}</h3>  
			        </div>

			        <div class="page-module banner-group-fixed-portrait">
			            <div class="banner">

			                <a v-if="data.moduleContent.banners">
			                    <img :src="data.moduleContent.banners[0].bannerImgSrc">
			                </a>
			            </div>
			        </div>


			        <div class="swiper-containerb">
			          <div class="swiper-wrapper">
			            <div class="swiper-slide" v-if="data.moduleContent.products" v-for="datachildren in data.moduleContent.products">
			            	<a >
			            	    <img :src="datachildren.productImg">
			            	    <p class="product-list-title">{{datachildren.productTitle}}</p>
			            	    <div class="product-list-price">
			            	        <span class="sale-price">{{datachildren.originalPrice}}</span>    
			            	    </div>
			            	</a>
			            </div>
			          </div>
			          <!-- Add Pagination -->
			          <!-- <div class="swiper-pagination"></div> -->
			        </div>

			    </div>

	 <div class="lookALL">查看全部 <span class="aaaa"></span></div>   

		</div>

	</template>

	<script>
	import axios from "axios"
	export default {

		data (){
			return{
				dataList:[],
				allList:[]
			}
		},

		beforeMount(){


			axios.get("/v2/page?pageId=1&tabId=1&_=1539762431332").then(res=>{
				// console.log(res.data.data.modules)
				this.dataList = res.data.data.modules[0].moduleContent.banners
				this.allList = res.data.data.modules.slice(1)
				this.$nextTick(res=>{
					var swiper = new Swiper('.swiper-containerb', {
					  slidesPerView: 3,
					  spaceBetween: 30,
					  loop: true,
					  autoplay:true,
					  pagination: {
					    el: '.swiper-pagination',
					    clickable: true,
					  },
					  navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					  },
					});

					var swiper = new Swiper('.swiper-containera', {
					  slidesPerView: 1,
					  spaceBetween: 30,
					  loop: true,
					  autoplay:true,
					  pagination: {
					    el: '.swiper-pagination',
					    clickable: true,
					  },
					  navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					  },
					});

					
				})


				// this.week = res.data.data.modules[1].moduleDescription
				// this.weekImg = res.data.data.modules[1].moduleContent.banners[0].bannerImgSrc
				// this.weekList = res.data.data.modules[1].moduleContent.products
				
				// console.log(this.allList.length)



			}).catch(error=>{
				console.log(error)
			})
		}

	}
	</script>

	<style scoped>
		.banner-group-and-product{
			background-color: white;
		}

		.banner-group-and-product .page-module-title{
			text-align: center;
			height: 1rem;
			margin-top:.2rem;
			padding-top:.2rem;
			font-size: 0.12rem;
			overflow: hidden;
		}

		.banner-group-and-product .page-module-title h3{
			margin-top:.2rem;
			color:#aaa;
		}

		.banner-group-and-product .page-module{
			text-align: center;
		}

		.banner-group-and-product .page-module img{
			width: 80%;

		} 


		.banner-group-and-product .swiper-containerb{
			overflow: hidden;
		}

		.banner-group-and-product .swiper-containerb a{
			
			text-align: center;
			font-size: .1rem;
		}

		.banner-group-and-product .swiper-containerb img{
			width: 100%;
		}

		.banner-group-and-product .swiper-containerb .datamoduleContentproducts{
			float: left;
			width: 30%;
			font-size: .1rem;
		}

		.lookALL{
			margin-bottom: .7rem;
			text-align: center;
			margin-top: -.2rem;

		}

		.aaaa{
				display: inline-block;
				width: 0;
				height: 0;
				border-top:.07rem solid white;
				border-left:.07rem solid black;
				border-bottom:.07rem solid white;
				border-right: 0;

		}


		/* ========================= */
		.swiper-containera img{
			width: 100%;
		}

		.banner-group-and-product-record{
			background-color: white;
		}

		.banner-group-and-product-record .page-module-title{
			text-align: center;
			height: 1rem;
			margin-top:.2rem;
			padding-top:.2rem;
			font-size: 0.12rem;
			overflow: hidden;
		}

		.banner-group-and-product-record .page-module-title h3{
			margin-top:.2rem;
			color:#aaa;
		}

		.banner-group-and-product-record .page-module{
			text-align: center;
		}

		.banner-group-and-product-record .page-module img{
			width: 80%;

		} 


		.banner-group-and-product-record .swiper-containera{
			
			overflow: hidden;
		}

		.banner-group-and-product-record .swiper-containera img{
			width: 80%;
		}

		.banner-group-and-product-record .swiper-containera .datamoduleContentproducts{
			float: left;
			width: 30%;
			font-size: .1rem;
		}
	</style>