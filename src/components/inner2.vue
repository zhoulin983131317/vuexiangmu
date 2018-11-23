<template>
	<div id="all">
		<header>
			<a href="http://localhost:8080/#/home" class="a1"><img src="../assets/home.png"></a>
			<h3>{{$store.state.title}}</h3>
			<a href="http://localhost:8080/#/classify" class="a2"><img src="../assets/category.png"></a>
		</header>

		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide border"><a href="#" class="imgAll"><img src="../assets/shafa.png"><p>All</p></a></div>
		      <div class="swiper-slide"><a href="#"><p>灯具</p></a></div>
		      <div class="swiper-slide"><a href="#"><p>用餐</p></a></div>
		      <div class="swiper-slide"><a href="#"><p>时尚生活</p></a></div>
		      <div class="swiper-slide"><a href="#"><p>烹饪</p></a></div>
		      <div class="swiper-slide"><a href="#"><p>纺织品</p></a></div>
		      <div class="swiper-slide"><a href="#"><p>家饰</p></a></div>
		      <div class="swiper-slide"><a href="#"><p>卫浴</p></a></div>
		    </div>
		</div>

		<div class="sort">
			<ul>
				<router-link tag="li" to="/inner2/newProduct" activeClass="active">上新</router-link>
				<router-link tag="li" to="/inner2/topSail" activeClass="active">销量</router-link>
				<router-link tag="li" to="/inner2/priceUp" activeClass="active">
					价格
					<!-- <span class="iconRotate">
						<img src="../assets/up.png" class="up">
						<img src="../assets/down.png" class="down">
					</span> -->
				</router-link>
			</ul>
		</div>

		<router-view></router-view>

	</div>
</template>

<script>


export default {
	data(){
		return{

		}
	},

	mounted(){
		
		var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 30,
	    });
	}

}
</script>

<style scoped>
	#all{
		padding-bottom: 0.44rem;
	}

	a{
		text-decoration: none;
	}

	header{
		background: white;
	    height: 0.44rem;
	    line-height: 0.44rem;
	    box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    -webkit-box-sizing: border-box;
	    -o-box-sizing: border-box;
	    -ms-box-sizing: border-box;
	    position: relative;
	    padding: 0rem 0.1rem 0rem 0.1rem;
	    border-bottom: .5px solid #f5f5f5;
	}

	header h3{
		position: absolute;
	    left: 43%;
	    top: 0;
	    font-size: 0.17rem;
	}

	header a{
		display: inline-block;
	    width: 0.32rem;
	    height: 0.32rem;
	    line-height: 0.25rem;
	    position: absolute;
	    top: 10%;
	    text-decoration: none;
    	color: #000;
	}	

	header a img{
		display: inline-block;
	    width: 0.26rem;
	    margin-top: 0.03rem;
	    margin-bottom: 0.03rem;
	    vertical-align: middle;
	}

	header .a1{
	    left: 0.1rem;
	}

	
	header .a2{
    	right: 0.1rem;
	}

	.swiper-container{
		background: url(../assets/11.jpg);
		background-size: 3.8rem;
	    position: relative;
	    height: 0.8rem;
	    padding: 0.15rem 0rem;
	}
	
	.swiper-wrapper{
		position: relative;
    	height: 100%;
    	margin-left: auto;
   	 	margin-right: auto;
    	z-index: 1;
	}

	.swiper-slide{
		width: 0.8rem !important;
    	height: 0.8rem;	
    	line-height: 0.8rem;
    	margin-left: 0.15rem;
    	/*margin-right: 0 !important;*/
    	border: 1px solid rgba(255, 255, 255, 0.2);
    	overflow: hidden;
    	text-align: center;
    	vertical-align: middle;
    	font-weight: 700;
    	font-size: 0.13rem;
    	position: relative;
	}
	
	.border{
		background: rgba(255, 255, 255, 0.2);
		border: 1px solid rgba(255, 255, 255, 1);
	}

	.border p{
		position: absolute;
		top: 20%;
		left: 38%;
	}

/*///////////////////////////////////////////////////////////////////////////////////////////////*/
	.swiper-slide a{
		color: #fff;
	    /*display: block;
	    padding: 0 0.12rem;
	    text-decoration: none;
	    text-align: center;*/
	}

	/*.swiper-slide .imgAll p{
		position: absolute;
		top: 60%;
	}*/

	.swiper-slide a img{
		width: 0.4rem;
    	margin: 0 auto;
	}

	/*.swiper-slide a p{
		position: absolute;
		top: 40%;
		left: 38%;
	}*/

	.sort{
		height: 0.4rem;
	    line-height: 0.4rem;
	    background: #fff;
	    border-bottom: 1px solid #F5F5F5;
	}

	.sort ul li{
		float: left;
	    color: #808080;
	    margin: 0rem 0.37rem;
	    position: relative;
	    font-size: 0.13rem;
	    width: 0.5rem;
	    text-align: center;
	}

	.active{
		border-bottom: 0.03rem solid #202020;
	    color: #000;
	    height: 0.4rem;
	}

	.sort .iconRotate{
		text-align: center;
	    width: 0.08rem;
	    height: 0.2rem;
	    right: 0rem;
	    position: absolute;
	    top: 25%;
	}

	
</style>