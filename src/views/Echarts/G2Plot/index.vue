<template>
	<div class="echarts">
		<h3>文档地址：https://g2plot.antv.vision/zh</h3>
		<el-row :gutter="20">
		  <el-col :span="6">
			  <div id="Line"></div>
		  </el-col>
		  <el-col :span="6">
			  <div id="StepLine"></div>
		  </el-col>
		  <el-col :span="6">
			  <div id="Pie"></div>
		  </el-col>
		  <el-col :span="6">
			  <div id="Liquid"></div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import { Line,StepLine,Pie,Liquid   } from '@antv/g2plot';
	export default {
		data() {
			return {
				line:[
				  { year: '1991', value: 3 },
				  { year: '1992', value: 4 },
				  { year: '1993', value: 3.5 },
				  { year: '1994', value: 5 },
				  { year: '1995', value: 4.9 },
				  { year: '1996', value: 6 },
				  { year: '1997', value: 7 },
				  { year: '1998', value: 9 },
				  { year: '1999', value: 13 },
				],
				pie:[
				  {
					type: '分类一',
					value: 27,
				  },
				  {
					type: '分类二',
					value: 25,
				  },
				  {
					type: '分类三',
					value: 18,
				  },
				  {
					type: '分类四',
					value: 15,
				  },
				  {
					type: '分类五',
					value: 10,
				  },
				  {
					type: '其它',
					value: 5,
				  },
				]
			}
		},
		mounted() {
			this.linePlot().render();
			this.StepPlot().render();
			this.piePlot().render();
			this.liquidPlot().render();
		},
		methods:{
			linePlot(){
				return new Line(document.getElementById('Line'), {
				  title: {
				    visible: true,
				    text: '折线图',
				  },
				  description: {
				    visible: true,
				    text: '用平滑的曲线代替折线。',
				  },
				  data:this.line,
				  xField: 'year',
				  yField: 'value',
				});
			},
			StepPlot(){
				return new StepLine(document.getElementById('StepLine'), {
						title: {
						  visible: true,
						  text: '阶梯折图',
						},
						description: {
						  visible: true,
						  text: '用平滑的曲线代替折线。',
						},
				      data:this.line,
				      xField: 'year',
				      yField: 'value',
				    });
			},
			piePlot(){
				return (
					new Pie(document.getElementById('Pie'), {
						title: {
						  visible: true,
						  text: '饼图',
						},
					  forceFit: true,
					  radius: 0.8,
					  data:this.pie,
					  angleField: 'value',
					  colorField: 'type',
					  label: {
						visible: true,
						type: 'inner',
					  },
					})
				)
			},
			liquidPlot (){
				return(
					new Liquid(document.getElementById('Liquid'), {
					  title: {
					    visible: true,
					    text: '水波图',
					  },
					  min: 0,
					  max: 10000,
					  value: 5639,
					})
				)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.echarts {
		background: #fff;
		margin: 10px 20px 0;
		h3{
			font-size:24px;
			text-align: center;
			padding:60px 0 0 0;
		}
	}
</style>
