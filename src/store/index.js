import Vuex from "vuex";
import Vue from "vue";
import vuexAlong from 'vuex-along'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		id: 20,
		title: "标题"
	},

	plugins: [vuexAlong],

	mutations:{

		sentTitle(state,payload){
			state.title = payload;
		},

		sentNum(state,payload){
			state.id = payload;
		}
	}
})

export default store;
