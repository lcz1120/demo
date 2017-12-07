<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" width="64" height="64">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name" v-text="seller.name"></span>
				</div>
				<div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
				<div class="support" v-if="seller.supports">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text" v-text="seller.supports[0].description"></span>
				</div>
			</div>
			<div class="support-count" v-if="seller.supports" @click="showDatail">
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDatail">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%">
		</div>
		<div class="datail" v-show="datail">
			<div class="detail-wapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
					<star :size="48" :score="seller.score"></star>
					<div class="detail-title">
						<h1>优惠信息</h1>
					</div>
				</div>
			</div>
			<div class="detail-close" @click="hideDatail">
				<i class="icon-close"></i>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import star from "components/star/star";

	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				datail: false
			}
		},
		methods: {
			showDatail() {
				this.datail = true;
			},
			hideDatail() {
				this.datail = false;
			}
		},
		created() {
			this.classMap = ['decrease','discount','special','invoice','guarantee'];
		},
		components: {
			star
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixin";

	.header
		color: #fff
		background: rgba(7, 17, 27, .5)
		position: relative
		overflow: hidden
		.content-wrapper
			padding: 24px 12px 18px 24px
			font-size: 0
			position: relative
			.avatar
				display: inline-block
				float: left
			.content
				display: inline-block
				margin-left: 16px
				font-size: 14px
				.title
					margin: 2px 0 8px 0
					.brand
						float: left
						margin: 2px 4px 0 0
						display: inline-block
						width: 30px
						height: 18px
						bg-image('brand')
						background-size: 30px 18px
						background-repeat: no-repeat
					.name
						font-size: 16px
						color: rgb(255, 255, 255)
						font-weight: bold
						line-height: 18px
				.description
					margin-bottom: 10px
					line-height: 12px
					font-size: 12px
				.support
					.icon
						display: inline-block
						width: 12px
						height: 12px
						vertical-align: middle
						background-size: 12px 12px
						background-repeat: no-repeat
						&.decrease
							bg-image('decrease_1')
						&.discount
							bg-image('discount_1')
						&.guarantee
							bg-image('guarantee_1')
						&.invoice
							bg-image('invoice_1')
						&.special
							bg-image('special_1')
					.text
						line-height: 12px
						font-size: 12px
			.support-count
				position: absolute
				right: 12px
				bottom: 14px
				padding: 0 8px
				height: 24px
				line-height: 24px
				border-radius: 14px
				background: rgba(0, 0, 0, 0.2)
				text-align: center
				.count
					vertical-align: top
					font-size: 10px
					line-height: 24px
				.icon-keyboard_arrow_right
					margin-left: 2px
					line-height: 24px
					font-size: 10px
		.bulletin-wrapper
			height: 28px
			line-height: 28px
			padding: 0 22px 0 12px
			white-space: nowrap
			overflow: hidden
			text-overflow: ellipsis
			position: relative
			background: rgba(7, 17, 27, 0.2)
			.bulletin-title
				display: block
				float: left
				vertical-align: top
				margin-top: 7px
				width: 22px
				height: 12px
				bg-image('bulletin')
				background-size: 22px 12px
				background-repeat: no-repeat
			.bulletin-text
				display: block
				width: 347px
				float: left
				vertical-align: top
				margin: 3px 4px 0
				font-size: 10px
				white-space: nowrap
				overflow: hidden
				text-overflow: ellipsis
			.icon-keyboard_arrow_right
				position: absolute
				font-size: 10px
				right: 12px
				top: 8px
		.background
			width: 100%
			height: 100%
			filter: blur(10px)
			position: absolute
			left: 0
			top: 0
			z-index: -1
		.datail
			position: fixed
			z-index: 99
			left: 0
			top: 0
			background: rgba(7, 17, 27, .8)
			width: 100%
			height: 100%
			overflow: auto
			.detail-wapper
				min-height: 100%
				.detail-main
					padding: 64px 0
					.name
						font-size: 16px
						line-height: 16px
						font-weight: 700
						color: rgb(255, 255, 255)
						text-align: center
					.star
						display: block
						width: 210px
						margin: 16px auto 0
			.detail-title
				padding: 0 36px
				margin-top: 28px
				h1
					font-size: 14px
					font-weight: 700
					color: rgb(255, 255, 255)
					line-height: 14px
			.detail-close
				position: relative
				width: 32px
				height: 32px
				font-size: 32px
				color: rgba(255, 255, 255, .5)
				margin: -64px auto 0
				
</style>