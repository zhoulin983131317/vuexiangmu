<template>
	<div class="ProductList">
		<ul class="flex-list"
			v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-immediate-check="false"
			  infinite-scroll-distance="0">
			<li class="li" v-for="data in datalist">
				<a href="#">
					<img :src="data.productImg">
					<p class="title">{{data.productTitle}}</p>
					<span>￥{{data.sellPrice}}</span>
					<p class="productName">{{data.productName}}</p>
				</a>
			</li>
		</ul>
		<p class="bottom">没有更多了</p>
	</div>
</template>
<script>


import axios from "axios"


export default {
	data(){
		return{
			datalist:[],
			loading:false,

			current:1,
			total:5
		}
	},

	mounted(){

		// console.log(this.$route.params.number);
		axios.get(`/pages/category/${this.$store.state.id}?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1539764890321`).then(res=>{
			console.log(res.data)
			this.datalist=res.data.data.products
			
		})
	},

	methods:{
		loadMore(){
			console.log("到底了")

			this.current++;

			if(this.current>this.total){
				this.loading=true;
				return;
			}

			axios.get(`/pages/category/${this.$store.state.id}?pageNumber=${this.current}&orderBy=onShelfTime&sort=desc&_=1539764890321`).then(res=>{
			console.log(res.data)
			this.datalist=[...this.datalist,...res.data.data.products]
			
		})
		}
	}
}
</script>

<style>
	.ProductList{
		border-top: 1px solid #f5f5f5;
	}

	.ProductList .flex-list{
		width: 100%;
		display: flex;
		flex-flow: wrap;
	}

	.ProductList .flex-list .li{
		border-right: 1px solid #f5f5f5;
    	border-bottom: 1px solid #f5f5f5;
		float: left;
	    width: 49.7%;
	    position: relative;
	    padding-bottom: 0.05rem;
	    height: 2.8rem;
	}

	.ProductList .flex-list .li a{
		display: block;
	    width: 100%;
	    position: relative;
	    /*font-size: 0;*/
	    padding-bottom: 0.1rem;
	    color: #555;
	    text-decoration: none;
	}

	.ProductList .flex-list .li a img{
		width: 1.7rem;
	    height: 1.71rem;
	    margin: 0 auto 0;
	    display: block;
	}

	.ProductList .flex-list .li a .title{
		color: #808080;
	    font-size: 0.12rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    width: 100%;
	    display: inline-block;
   	 	vertical-align: middle;
   	 	text-indent: 1em;
	}

	.ProductList .flex-list .li a .productName{
		color: #808080;
	    font-size: 0.11rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    width: 80%;
	    margin-left: 0.15rem;
	}

	.ProductList .flex-list .li a span{
		font-family: PingFangSC-Regular;
	    font-size: 0.13rem;
	    color: #000;
	    margin-right: 0.05rem;
	    margin-left: 0.15rem;
	}

	.bottom{
		height: 50px;
	    line-height: 50px;
	    text-align: center;
	    font-size: 12px;
	}




</style>