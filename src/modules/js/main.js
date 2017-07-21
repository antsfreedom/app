var banner = {
	init: function (){
		require(['jquery','swiper'],function($,swiper){
			$(document).ready(function(){
				var mySwiper = new Swiper ('.swiper-container', {
			    
			    //分页器
			    pagination: '.swiper-pagination',
			  })  
			})
		})
	}
}

exports.banner = banner;    //后面的banner  等于上面变量banner
