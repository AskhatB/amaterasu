import React, { Component } from 'react'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

import axios from 'axios'

import '../assets/style/PieChart.css'

class PieChart extends Component{
	constructor(props){
		super(props)
		this.state = {
			myDataSource: {
			  chart: {
			    caption: 'Top 10 enterprise sections in Almaty',
			    subCaption: '',
			  },
			  data: [{}]
			},
			section: 0,
			areas: []
		}
	}
	componentWillMount(){
		axios.post('/api/labels').then(response => {
			response.data.docs.map((value) => {
				this.setState({
					myDataSource: {
						...this.state.myDataSource,
						data:[
							...this.state.myDataSource.data,
							{
								label: value._id,
								value: value.count
							}
						]
					}
				})
			})
		})
	}
	render(){
		const chartConfigs = {
		  type: 'pie3d',
		  width: 1000,
		  height: 600,
		  dataFormat: 'json',
		  dataSource: this.state.myDataSource,
		};
		return(
			<div className="pie-chart">
				{
					this.state.myDataSource.data ?
					<ReactFC {...chartConfigs} />
					: <div>Loading</div>
				}
			</div>
		)
	}
}

export default PieChart