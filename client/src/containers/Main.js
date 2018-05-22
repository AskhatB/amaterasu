import React, { Component } from 'react'
import '../assets/style/Main.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import PieChart from "react-svg-piechart"

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);


class Main extends Component{
	constructor(props){
		super(props)
		this.state = {
			searchInput: null,
			searchByCity: "Алматы",
			listOfSections: null,
			data: [],
			postcodes: [],
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
		axios.get('/api/enterprises').then(response => {
			this.setState({...this.state, data: response.data.docs})
		})
		axios.post('/api/area').then(res => {
			this.setState({...this.state, areas: res.data.docs})
		})
		axios.post('/api/insert').then(res => {
			this.setState({...this.state, listOfSections: res.data.docs})
		})
		this.pieChartData()
	}


	pieChartData(){
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
		  height: 400,
		  dataFormat: 'json',
		  dataSource: this.state.myDataSource,
		};
		return(
			<div className="Main">
			<Header />
			<div className="sep-100"></div>
				<div className="container">
					<div className="row">
						<div className="col-6 d-flex">
						<div>
							<div className="small-text">Name</div>
							<input 
								type="text" 
								className="form-control search"
								onChange={(event) => this.setState({...this.state, searchInput: event.target.value})}
								style={{'width':'367px'}}
							/>
						</div>
						
							<button 
								type="button" 
								className="btn btn-primary" 
								onClick={() => this.props.history.push(`/search/${this.state.searchInput}`)}
								style={{'margin-top': '22px','margin-left': '-1px'}}
							>Search by name
							</button>
						
						</div>
					</div>
					<div className="row">
						<div className="col-3 d-flex align-items-center justify-content-between" style={{'margin-top': '20px'}}>
							<div>
								<div className="small-text">Section</div>
							
								<select 
									className="form-control selcls"
									onChange={(event) => this.setState({...this.state, section: event.target.value})}
									style={{'width':'367px'}}
								>
								<option value={0}>Choose section</option>
								{
									this.state.listOfSections ?
										this.state.listOfSections.map((value, index) => {
											return value._id ? <option value={index}>{value._id}</option> : null
										})
									:null
								}
								</select>
							</div>
								<Link to={`/sections/${this.state.section}`}>
									<button 
										type="button" 
										className="btn btn-primary" 
										style={{'margin-top': '22px','margin-left': '29px'}}
									>Search by section
									</button>
								</Link>
						</div>
					</div>					
					<div className="sep-30"></div>
					<div className="row">
						<div className="col-3">
							<Link to="/list">
								<button type="button" className="btn btn-primary">Show all list of enterprises</button>
							</Link>
						</div>
					</div>
					<div className="row">
						<div className="col" style={{'border':'2px solid #007bff', 'padding': '0', 'max-width': 'max-content', 'margin':' 50px auto', 'z-index': '999'}}>
						{
							this.state.myDataSource.data ?
							<ReactFC {...chartConfigs} />
							: <div>Loading</div>
						}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Main