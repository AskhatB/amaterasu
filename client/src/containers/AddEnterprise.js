import React, { Component } from 'react'
import '../assets/style/AddEnterprise.css'

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
			}
		}
	}
	render(){
		return(
			<div className="add-enterprise">
				<div className="sep-30"></div>
				<div className="container">
					<div className="h1">Добавить организацию</div>
					<div className="sep-30"></div>
					<div className="row">
						<div className="col">
							<div className="small-text">Название организации</div>
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
						{console.log(this.state.data)}
						<div className="col">
							<div className="small-text">Город</div>
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
							  <option>Almaty</option>
							  <option>Astana</option>
							  <option>Kostanay</option>
							</select>
						</div>
					</div>
					<div className="sep-30"></div>
					<div className="row">
						<div className="col">
							<div className="small-text">Адрес</div>
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
							<div className="small-text">Телефон</div>
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
							<div className="small-text">Почтовый индекс</div>
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
							<button type="button" className="btn btn-primary">Add</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AddEnterprise