import store from '@/store';
export default{
	inserted (el,binding) {
		let roles = store.getters.name;
		let { value } = binding;
		if(Array.isArray(value)&&value.length>=1){
			let isRole = value.some((item)=> item==roles);
			if(!isRole){
				el.parentNode&&el.parentNode.removeChild(el);
			}
		}else{
			throw new Error("请输入正确的操作如v-permission:['admin']")
		}
	}
}