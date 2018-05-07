import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/Header.css'


class Header extends Component{
	render(){
		return(
			<div className="container">
			<div className="sep-30"></div>
				<div className="row">
					<div className="col">
						<div className="logo">
							<img src="https://www.edcast.com/corp/wp-content/uploads/2016/03/ed-icon-black-01.png" />
						</div>
					</div>
					<div className="col d-flex justify-content-end align-items-center">
						<Link to="/add">
							<button type="button" className="btn btn-success add-enterprise">Add new enterprise</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Header