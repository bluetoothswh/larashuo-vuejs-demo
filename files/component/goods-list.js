//注册组件
Vue.component('goods-list',{
	//模板
	template:`
			<div class="col s12">
					<table class="table bordered striped highlight my-table">
					<tbody>
						<tr>
							<th>编号</th>
							<th>名称</th>
							<th>价格</th>
							<th>分类</th>
						</tr>
						<tr v-for="goods in goods_list">
							<td>{{goods.id}}</td>
							<td>
								<a 
								    v-bind:class="{'red-text':active}"
									v-bind:href="goods.url">
								   {{goods.goods_name}}
							    </a>
							</td>
							<td>{{goods.shop_price}}</td>
							<td>{{goods.cat_name}}</td>
						</tr>
					</tbody>
					</table>
			</div>
	`,
	data:function(){

		return {
					goods_list:[
									{'id':'1','goods_name':'iphone8plus','shop_price':'8888','cat_name':'手机','url':'goods/8'},
									{'id':'2','goods_name':'iphoneX','shop_price':'99999','cat_name':'手机','url':'goods/9'},
									{'id':'3','goods_name':'iMac','shop_price':'10000','cat_name':'台式机','url':'goods/10'},
									{'id':'4','goods_name':'MacBookPro','shop_price':'20000','cat_name':'笔记本','url':'goods/11'},
									{'id':'5','goods_name':'MacBook','shop_price':'10000','cat_name':'笔记本','url':'goods/12'},
									{'id':'6','goods_name':'MacPro','shop_price':'300000','cat_name':'工作站','url':'goods/13'},
									{'id':'7','goods_name':'iPad Pro','shop_price':'4000','cat_name':'平板电脑','url':'goods/14'},
					],
					active:true,
		};
	},
});

var app = new Vue({
	el:'#root',
})