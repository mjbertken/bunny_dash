/*Dashboard Init*/
 
"use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
	$('#statement').DataTable({
		"bFilter": false,
		"bLengthChange": false,
		"bPaginate": false,
		"bInfo": false,
	});
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	window.setTimeout(function(){
		$.toast({
			heading: 'Welcome to Bunny',
			text: 'Use the predefined ones, or specify a custom position object.',
			position: 'bottom-left',
			loaderBg:'#e58b25',
			icon: 'success',
			hideAfter: 3500, 
			stack: 6
		});
	}, 3000);
});
/*****Load function* end*****/

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option = {
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			grid:{
				show:false,
				top: 30,
				bottom: 10,
				containLabel: true,
			},
			color: ['#6d300e', '#e58b25'],		
			legend: {
				show : false,
				data:['Latest transaction price', 'Order'],
				x : 'left',
				y : 'bottom'
			},
			toolbox: {
				show: false,
				feature: {
					dataView: {readOnly: false},
					restore: {},
					saveAsImage: {}
				}
			},
			dataZoom: {
				show: false,
				start: 0,
				end: 100
			},
			xAxis: [
				{
					type: 'category',
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
					boundaryGap: true,
					data: (function (){
						var now = new Date();
						var res = [];
						var len = 10;
						while (len--) {
							res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
							now = new Date(now - 2000);
						}
						return res;
					})()
				},
				{
					type: 'category',
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
					boundaryGap: true,
					data: (function (){
						var res = [];
						var len = 10;
						while (len--) {
							res.push(len + 1);
						}
						return res;
					})()
				}
			],
			yAxis: [
				{
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
					splitLine: {
						show: false,
					},
					type: 'value',
					scale: true,
					name: '',
					max: 30,
					min: 0,
					boundaryGap: [0.2, 0.2]
				},
				{
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
					splitLine: {
						show: false,
					},
					type: 'value',
					scale: false,
					name: '',
					max: 1200,
					min: 0,
					boundaryGap: [0.2, 0.2]
				}
			],
			series: [
				{
					name:'Order',
					type:'bar',
					xAxisIndex: 1,
					yAxisIndex: 1,
					barWidth:10,
					data:(function (){
						var res = [];
						var len = 10;
						while (len--) {
							res.push(Math.round(Math.random() * 1000));
						}
						return res;
					})()
				},
				{
					name:'Latest transaction price',
					type:'line',
					data:(function (){
						var res = [];
						var len = 0;
						while (len < 10) {
							res.push((Math.random()*10 + 5).toFixed(1) - 0);
							len++;
						}
						return res;
					})()
				}
			],
			textStyle: {
				fontStyle: 'normal',
				fontWeight: 'normal',
			},
			
		};
		var app = [];
		app.count = 11;
		setInterval(function (){
			var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
			var data0 = option.series[0].data;
			var data1 = option.series[1].data;
			data0.shift();
			data0.push(Math.round(Math.random() * 1000));
			data1.shift();
			data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

			option.xAxis[0].data.shift();
			option.xAxis[0].data.push(axisData);
			option.xAxis[1].data.shift();
			option.xAxis[1].data.push(app.count++);
			eChart_1.setOption(option);
		}, 2100);
		eChart_1.setOption(option);
		eChart_1.resize();
	}
	if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option1 = {
			  series: [{
				type: 'liquidFill',
				data: [0.6, 0.5, 0.4],
				radius: '80%',
				shape: 'diamond',
				color: ['#e58b25','#f8b32d','#6d300e'],
				backgroundStyle: {
					borderWidth: 0,
					color: 'rgba(255,255,255,0)',
					shadowBlur: 0
				},
				itemStyle: {
					normal: {
						shadowBlur: 5,
						shadowColor: 'rgba(0, 0, 0, .5)'
					}
				},
				outline: {
					borderDistance: 3,
					itemStyle: {
						borderWidth: 5,
						borderColor: '#6d300e',
						shadowBlur: 0,
					}
				},
				label: {
					normal: {
						fontSize: 20
					}
				}
			}]
		};
		eChart_2.setOption(option1);
		eChart_2.resize();
	}
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var option3 = {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)",
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			legend: {
				show:false
			},
			toolbox: {
				show : false,
			},
			calculable : true,
			labelLine: {
				 normal: {
					 smooth: true,
					 lineStyle: {
						 width: 2
					 }
				 }
			},
			itemStyle: {
				 normal: {
					 shadowBlur: 5,
					 shadowColor: 'rgba(0, 0, 0, 0.5)'
				 }
			},
			series : [
				{
					name:'Advertising',
					type:'pie',
					radius : '80%',
					center : ['50%', '50%'],
					roseType : 'radius',
					color: ['#f8b32d', '#e58b25', '#6d300e'],
					data:[
						{value:335, name:'Active'},
						{value:310, name:'Closed'},
						{value:174, name:'Hold'},
					].sort(function (a, b) { return a.value - b.value; }),
				},
			],
			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 1000;
			}	
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
	}
}
/*****E-Charts function end*****/

/*****Sparkline function start*****/
var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '35',
			lineColor: '#6d300e',
			fillColor: '#6d300e',
			minSpotColor: '#6d300e',
			maxSpotColor: '#6d300e',
			spotColor: '#6d300e',
			highlightLineColor: '#6d300e',
			highlightSpotColor: '#6d300e'
		});
	}	
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([0,2,8,6,8], {
			type: 'line',
			width: '100%',
			height: '35',
			lineColor: '#6d300e',
			fillColor: '#6d300e',
			minSpotColor: '#6d300e',
			maxSpotColor: '#6d300e',
			spotColor: '#6d300e',
			highlightLineColor: '#6d300e',
			highlightSpotColor: '#6d300e'
		});
	}	
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
			type: 'line',
			width: '100%',
			height: '35',
			lineColor: '#6d300e',
			fillColor: '#6d300e',
			minSpotColor: '#6d300e',
			maxSpotColor: '#6d300e',
			spotColor: '#6d300e',
			highlightLineColor: '#6d300e',
			highlightSpotColor: '#6d300e'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
			type: 'bar',
			width: '100%',
			height: '50',
			barWidth: '5',
			barSpacing: '5',
			barColor: '#6d300e',
			highlightSpotColor: '#6d300e'
		});
	}	
}
/*****Sparkline function end*****/

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
sparklineLogin();
echartsConfig();
/*****Function Call end*****/