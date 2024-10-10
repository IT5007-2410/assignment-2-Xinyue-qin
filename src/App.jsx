const { Component } = React;

/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id:1, name: 'Jack', age: 80, phone: 88885555,
    email: "Jack3340@gmail.com", bookingTime: '2024-02-02'},
  {
    id:2, name: 'Rose', age: 25, phone: 88884444,
    email: "rosej0093@gmail.com", bookingTime: '2024-02-10'}
];
const currentID = 2;
const passengerNumber = 2;
// function TravellerRow(props) {
//   {/*Q3. Placeholder to initialize local variable based on traveller prop.*/
//   //const travellerRow = {};
//   }
//   return (
//     <div>
//       <tr>
//       {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/
//       <td> {props['id']}</td><td>{props['name']}</td>}
//       </tr>
//     </div>
//   );
// }

class Display extends React.Component {
  constructor() {
    super();
  }
  render() {
    const traveller = this.props.travellerprop;
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
    const TravellerRows = traveller.map(i=><tr key={i.id}><td>{i.id}</td><td>{i.name}</td><td>{i.age}</td><td>{i.phone}</td><td>{i.email}</td><td>{i.bookingTime}</td></tr>); //add key = {i.id} (unique ID) here as the key
  return (
    
    <table className="bordered-table">
      <thead>
        <tr>
	  {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Booking Time</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/
        TravellerRows}
      </tbody>
    </table>
  );
  }
}

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    const form = document.forms.bookTraveller;
    console.log(form.travellername.value, form.travellerage.value, form.travellerphone.value, form.travelleremail.value, form.travellerbookingTime.value);
    //code to add the traveller
    this.props.addfunction(form.travellername.value, form.travellerage.value, form.travellerphone.value, form.travelleremail.value, form.travellerbookingTime.value);
  }

  render() {
    return (
      <form name="bookTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <input type="number" name="travellerage" placeholder="Age" />
        <input type="number" name="travellerphone" placeholder="Phone" />
        <input type="email" name="travelleremail" placeholder="Email" />
        <input type="date" name="travellerbookingTime" placeholder="BookingTime" />
        <button>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    const form = document.forms.deleteTraveller;
    console.log(form.travellername.value);
    //code to delete the traveller
    this.props.deletefunction(form.travellername.value);
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
	<input type="text" name="travellername" placeholder="Name" />
        <button>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
	constructor() {
	super();
	}
	render(){
	return (
	<div>
		{/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
	</div>);
	}
}
class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = {travellers: [], showSelectorCount: 0, passengerNumber: 0};
    this.showSelector = this.showSelector.bind(this); //"bind" method is used to pass the context (e.g. "this") to javascript function when it will trigger.
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  showSelector(count)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({showSelectorCount: count});
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    console.log(this.state.travellers);
  }
  loadData() {
    setTimeout(() => {
      this.setState({travellers: initialTravellers, ID: currentID, passengerNumber: 2});
    }, 500);
  }

  bookTraveller(passengername, passengerage, passengerphone, passengeremail, passengerbookingTime) {
	  /*Q4. Write code to add a passenger to the traveller state variable.*/
    console.log("addTraveller: ", passengername, passengerage, passengerphone, passengeremail, passengerbookingTime);
    //actural add
    var ID = this.state.ID + 1;
    var passengerNumber = this.state.passengerNumber + 1;
    var newpassenger =  {
      id: ID, name: passengername, age: passengerage, phone: passengerphone,
      email: passengeremail, bookingTime: passengerbookingTime
    };
    if (passengerNumber > 10) { //overflow case assuming that the train has 10 seats in total
      alert("No free seats now!");
    } else {
      this.state.travellers.push(newpassenger);
      this.setState({ID: ID, passengerNumber: passengerNumber});
      alert("Added!");
    }
    //this.state.travellers.push(newpassenger);
    //this.setState({ID: ID, passengerNumber: passengerNumber});
    //this.state.travellers.forEach(element => {
      //if (element.name != passenger){newlist.push(element)};
    //});
    //this.setState({travellers:newlist})
    //console.log(this.state.travellers);
    //console.log(newlist)
    //    this.props.addfunction(form.travellername.value, form.travellerage.value, form.travellerphone.value, form.travelleremail.value);
  
  }

  deleteTraveller(passenger) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
    console.log("deleteTraveller: ", passenger);
    //actural deletion 
    var newlist = [];
    var newpassengerNumber = 0;
    var passengerNumber = this.state.passengerNumber;
    if (passengerNumber < 1) { //overflow case assuming that the train has 10 seats in total
      alert("No passengers to delete now!");
    } else {
      this.state.travellers.forEach(element => {
        if (element.name != passenger){
          newlist.push(element);
          newpassengerNumber = newpassengerNumber + 1};
      });
      this.setState({travellers:newlist})
      console.log(this.state.travellers);
      console.log(newlist)
        if (newpassengerNumber == passengerNumber){
          alert("Passengers not found!");
        }
        else{
          this.setState({passengerNumber: newpassengerNumber});
          alert("Deleted!");
        }
      
  /////////////////////////
    }

    this.state.travellers.forEach(element => {
      if (element.name != passenger){newlist.push(element)};
    });
    this.setState({travellers:newlist})
    console.log(this.state.travellers);
    console.log(newlist)

  }
  
  render() {
    const showSelectorCount = this.state.showSelectorCount;
    return (
      <div>
        <h1>Ticket To Ride</h1>
	      <div>
	      {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}

        <nav>
            <ul className = "nav_menu">
              <li onClick={() => this.showSelector(0)}><a href = "#">Home</a></li>
              <li onClick={() => this.showSelector(1)}><a href = "#">Display</a></li>
              <li onClick={() => this.showSelector(2)}><a href = "#">Add</a></li>
              <li onClick={() => this.showSelector(3)}><a href = "#">Delete</a></li>
            </ul>
          </nav>
	    </div>

	      <div>
		      {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
		      {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
          {showSelectorCount == 0 ? <Add addfunction={this.bookTraveller}/> : null}
          		      {/*Q3. Code to call component that Displays Travellers.*/}
          {showSelectorCount == 1 ? <Display travellerprop={this.state.travellers}/> : null}
                    		      {/*Q4. Code to call the component that adds a traveller.*/}
          {showSelectorCount == 2 ?<Add addfunction={this.bookTraveller}/> : null}
                    		      {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
          {showSelectorCount == 3 ? <Delete deletefunction={this.deleteTraveller}/> : null}
	      </div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
