import React, { Component } from 'react'
import '../assets/style/Main.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import PieChart from "react-svg-piechart"


class Main extends Component{
	constructor(props){
		super(props)
		this.state = {
			searchInput: null,
			searchByCity: "Алматы",
			data: [],
			postcodes: []
		}
	}

	searchHandle(){
		axios.post('/api/search', {city:this.state.searchByCity})
		.then(res => {
			// console.log(res)
		})
	}


	componentWillMount(){
		axios.get('/api/enterprises').then(response => {
			this.setState({...this.state, data: response.data.docs})
		})
	}


	
	render(){
		const data = [
		  {title: "Data 1", value: 100, color: "#22594e"},
		  {title: "Data 2", value: 60, color: "#2f7d6d"},
		  {title: "Data 3", value: 30, color: "#3da18d"},
		  {title: "Data 4", value: 20, color: "#69c2b0"},
		  {title: "Data 5", value: 10, color: "#a1d9ce"},
		]
		return(
			<div className="Main">
			<Header />
			<div className="sep-100"></div>
				<div className="container">
					<div className="row">

						<div className="col-6 d-flex">
							<input 
								type="text" 
								className="form-control search"
								onChange={(event) => this.setState({...this.state, searchInput: event.target.value})}
							/>
							<button 
								type="button" 
								className="btn btn-primary" 
								onClick={() => this.searchHandle()}
							>Search
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<div className="sep-30"></div>
							<div className="small-text">City</div>
							<select 
								className="form-control selcls"
								onChange={(event) => this.setState({...this.state, searchByCity: event.target.value})}
							>
							  <option value="Алматы">Almaty</option>
							  <option value="Астана">Astana</option>
							  <option value="Костанай">Kostanay</option>
							</select>
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
						<div className="col">
							<PieChart
								data={data}
								expandSize={36}
								expandOnHover
								onSectorHover={(d, i, e) => {
							      if (d) {
							        console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
							      } else {
							        console.log("Mouse leave - Index:", i, "Event:", e)
							      }
							    }}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Main