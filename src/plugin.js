import Vue from 'vue'
import InputNumber from './components/InputNumber.vue'

const plugin = {
	install (Vue, options) {
		Vue.component('v-input-number', InputNumber);
	}
};

export default plugin;