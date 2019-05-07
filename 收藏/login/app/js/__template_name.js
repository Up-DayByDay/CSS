var vue = new Vue({
	el:"#index",
	data: {
		uname:"admin",
		upwd:"admin"
	},
	methods: {
		loginClick: function() {
			alert('dl');
				// 页面跳转
				mtl.navigateTo({ url: '/html/login' })
		}

	}
})