<template>
	<div class="echarts">
		<div class="map-content">
			<div id="map"></div>
		</div>
	</div>
</template>

<script>
	import { Scene } from '@antv/l7';
	import { GaodeMap } from '@antv/l7-maps';
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			const scene = new Scene({
			  id: 'map',
			  logoVisible:false,
			  map: new GaodeMap({
			    style: 'dark',
			    center: [110.770672, 34.159869],
			    pitch: 45,
			  }),
			});
		}
	}
</script>

<style lang="scss" scoped>
	.echarts {
		background: #fff;
		margin:20px;
		h3{
			font-size:24px;
			text-align: center;
			padding:60px 0 0 0;
		}
		.map-content{
			width:100%;
			height:800px;
			#map{
				position:relative;
				width:100%;
				height: 100%;
			}
		}
	}
</style>
