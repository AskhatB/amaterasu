import React, { Component } from 'react'
import axios from 'axios'

class ListOfEnterprises extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}
	componentWillMount(){
		axios.get('/api/enterprises').then(res =>{
			this.setState({...this.state, data: res.data.docs})
		})
	}

	render(){
		return(
			<div className="container">
			{
				this.state.data ?
				<div className="row">
				{
					this.state.data.map((value, index)=>{
						return(
							<div className="col-12" key={index} >
								<div className="sep-30"></div>
								<ul className="list-group">
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Название организации</span> {value['Название организации']}
									</li>
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Город</span> {value['Населенные пункты']}
									</li>
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Адрес</span> {value['Адреса']}
									</li>
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Почтовые индекс</span> {value['Почтовые индексы']}
									</li>
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Телефон</span> {value['Телефоны']}
									</li>
									{
										value['Сайты'] ?
										<li className="list-group-item">
											<span className="badge badge-primary badge-pill">Сайт</span> {value['Сайты']}
										</li>
										:null
									}
									{
										value['E-mail'] ?
										<li className="list-group-item">
											<span className="badge badge-primary badge-pill">E-mail</span> {value['E-mail']}
										</li>
										: null
									}
								</ul>
							</div>
						)
					})
				}
				</div>
				: <div className="loader"></div>
			}
			</div>
		)
	}
}

export default ListOfEnterprises