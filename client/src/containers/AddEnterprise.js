import React, { Component } from 'react'
import '../assets/style/AddEnterprise.css'
import axios from 'axios'

class AddEnterprise extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: {
				'Название организации': null,
				'Город': null,
				'Адрес': null,
				'Телефон': null,
				'Почтовый индекс': null,
				'Разделы': null
			},
			listOfSections: []
		}
	}

	addEnterprise(){
		axios.post('/api/add', {
			city: this.state.data['Город'],
			index: this.state.data['Почтовый индекс'],
			address: this.state.data['Адрес'],
			name: this.state.data['Название организации'],
			tel: this.state.data['Телефон'],
			section: this.state.data['Разделы']
		}).then(res => {
			console.log(res)
		})
	}

	componentWillMount(){
		axios.post('/api/insert').then(res => {
			this.setState({listOfSections: res.data.docs})
		})
	}

	render(){
		return(
			<div className="add-enterprise">
				<div className="sep-30"></div>
				<div className="container">
					<div className="h1">Add enterprise</div>
					<div className="sep-30"></div>
					<div className="row">
						<div className="col">
							<div className="small-text">Name of organization</div>
							<input 
								type="text" 
								className="form-control search" 
								onChange={(event) => this.setState({
									...this.state, 
									data: {
										...this.state.data, 
										'Название организации' : event.target.value
									}})
								}
							/> 
						</div>
						<div className="col">
							<div className="small-text">City</div>
							<select 
								className="form-control selcls"
								onChange={(event) => this.setState({
									...this.state, 
									data: {
										...this.state.data, 
										'Город' : event.target.value
									}})
								}
							>
							<option value={0}>Choose city</option>
							  <option value="Алматы">Almaty</option>
							  <option value="Астана">Astana</option>
							  <option value="Костанай">Kostanay</option>
							</select>
						</div>
						<div className="col">
							<div className="small-text">Section</div>
							<select 
								className="form-control selcls"
								onChange={(event) => this.setState({
									...this.state, 
									data: {
										...this.state.data, 
										'Разделы' : event.target.value
									}})
								}
							>
							<option value={0}>Choose section</option> 
							{
								this.state.listOfSections.map((value, index) => {
									return value._id ? <option value={value._id}>{value._id}</option> : null
								})
							}
							</select>
						</div>
					</div>
					<div className="sep-30"></div>
					<div className="row">
						<div className="col">
							<div className="small-text">Address</div>
							<input 
								type="text" 
								className="form-control search"
								onChange={(event) => this.setState({
									...this.state, 
									data: {
										...this.state.data, 
										'Адрес' : event.target.value
									}})
								}
							/> 
						</div>
						<div className="col">
							<div className="small-text">Phone</div>
							<input 
								type="text" 
								className="form-control search"
								onChange={(event) => this.setState({
									...this.state, 
									data: {
										...this.state.data, 
										'Телефон' : event.target.value
									}})
								}
							/> 
						</div>
						<div className="col">
							<div className="small-text">Post index</div>
							<input 
								type="text" 
								className="form-control search"
								onChange={(event) => this.setState({
									...this.state, 
									data: {
										...this.state.data, 
										'Почтовый индекс' : event.target.value
									}})
								}
							/> 
						</div>
					</div>
					<div className="sep-30"></div>
					<div className="row">
						<div className="col">
							<button type="button" className="btn btn-primary" onClick={() => this.addEnterprise()}>Add</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AddEnterprise