import React, { Component } from 'react'
import Main from './containers/Main'
import AddEnterprise from './containers/AddEnterprise'
import ListOfEnterprises from './containers/ListOfEnterprises'
import { Switch, Route } from 'react-router-dom'

import './assets/style/Common.css'

class App extends Component {
	// state = {
	//     response: ''
	// };

 //  	componentDidMount() {
 //    	this.callApi()
 //      		.then(res => this.setState({ response: res.express }))
 //      		.catch(err => console.log(err));
 //  	}

 //  	callApi = async () => {
 //    	const response = await fetch('/api/hello');
 //    	const body = await response.json();

 //    	if (response.status !== 200) throw Error(body.message);

 //    	return body;
 //  	};
  	render() {
    	return (
      		<div>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/add" component={AddEnterprise}/>
              <Route exact path="/list" component={ListOfEnterprises}/>
            </Switch>
     		 </div>
    	);
  	}
}

export default App;
