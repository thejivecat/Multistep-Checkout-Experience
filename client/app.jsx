function Homepage({incCount}) {
	return (
		<div>
			<button onClick={() => incCount()}>Checkout</button>
		</div>
	)
}

function Info({handleChange, incCount}) {
	return (
		<div>
			<form>
				<label>Name
					<input name="name" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>Email 
					<input name="email" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>Password
					<input name="password" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label>
			</form> <br/>
		<button type="button" name="Next" onClick={() => incCount()}>Next</button>
		</div>
	)
}

function Shipping({handleChange, incCount}) {
	return (
		<div>
			<form>
				<label>Line 1
					<input name="line1" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>Line 2
					<input name="line2" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>City
					<input name="city" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>State
					<input name="state" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>ZIP
					<input name="zip" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>Phone Number
					<input name="phone" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<button type="button" name="Next" onClick={() => incCount()}>Next</button>
			</form>
		</div>
	)
}

function Credit({handleChange, incCount}) {
	return (
		<div>
			<form>
				<label>Number
					<input name="credit" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>Expiration
					<input name="expiration" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>CVV 
					<input name="CVV" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<label>Billing ZIP
					<input name="billingzip" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
				</label> <br/>
				<button type="button" name="Next" onClick={() => incCount()}>Next</button>
			</form>
		</div>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stateCounter: 0,
		};
		this.incCount = this.incCount.bind(this);
		this.setHome = this.setHome.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(prop, value) {
		this.setState({
			[prop]: event.target.value
		})
	}

	incCount () {
		this.setState({
			stateCounter: this.state.stateCounter+1
		})
	}

	setHome () {
		this.setState({
			stateCounter: 0
		})
	}
	stringifyData() {
		var dataStr = `${this.state.name}` + '\xa0\xa0\xa0\xa0' + `${this.state.email}` + '\xa0\xa0\xa0\xa0' + `${this.state.password}` + '\xa0\xa0\xa0\xa0' + `${this.state.line1}` + '\xa0\xa0\xa0\xa0' + `${this.state.line2}` + '\xa0\xa0\xa0\xa0' + `${this.state.city}` + '\xa0\xa0\xa0\xa0' + `${this.state.state}` + '\xa0\xa0\xa0\xa0' +  `${this.state.zip}` + '\xa0\xa0\xa0\xa0' + `${this.state.phone}` + '\xa0\xa0\xa0\xa0' + `${this.state.credit}` + '\xa0\xa0\xa0\xa0' + `${this.state.expiration}` + '\xa0\xa0\xa0\xa0' + `${this.state.cvv}` + '\xa0\xa0\xa0\xa0' + `${this.state.billingzip}`;
		return dataStr;
	}
// 	F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.

	render() {
		if (this.state.stateCounter === 4) {
			return (
				<div>
					<h1>User Information</h1>
					{this.state.name}<br/>
					{this.state.email}<br/>
					{this.state.password}
					<br/>
					<h1>Shipping Information</h1>
					{this.state.line1}<br/>
					{this.state.line2}<br/>
					{this.state.city}<br/>
					{this.state.state}<br/>
					{this.state.zip}<br/>
					{this.state.phone}
					<br/>
					<h1>Credit Card Information</h1>
					{this.state.credit}<br/>
					{this.state.expiration}<br/> 
					{this.state.cvv} <br/> 
					{this.state.billingzip}
				</div>
			)
		} else {
			return (
				<div>
					{this.state.stateCounter === 0 ? <Homepage incCount={this.incCount}/> : undefined} 
					{this.state.stateCounter === 1 ? <Info incCount={this.incCount} handleChange={this.handleChange}/> : undefined} 
					{this.state.stateCounter === 2 ? <Shipping incCount={this.incCount} handleChange={this.handleChange}/> : undefined}
					{this.state.stateCounter === 3 ? <Credit incCount={this.incCount} handleChange={this.handleChange}/> : undefined}
					{this.state.stateCounter === 5 ? <Homepage setHome={this.setHome}/> : undefined}
				
				</div>
			)
		}

	}
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);