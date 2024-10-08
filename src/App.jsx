/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1, name: 'Jack', age: 80, phone: 88885555,
    email: "Jack3340@gmail.com", bookingTime: new Date()
  },
  {
    id: 2, name: 'Rose', age: 25, phone: 88884444,
    email: "rosej0093@gmail.com", bookingTime: new Date()}
];
var currentID = 2;


function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  return (
    <tr>
	  {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
    </tr>
  );
}

function Display(props) {
  
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/

  return (
    <table className="bordered-table">
      <thead>
        <tr>
	  {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Booking Time</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
      </tbody>
    </table>
  );
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
    console.log(form.travellername.value, form.travellerage.value, form.travellerphone.value, form.travelleremail.value);
    //code to add the traveller
    this.props.addfunction(form.travellername.value, form.travellerage.value, form.travellerphone.value, form.travelleremail.value);
  }

  render() {
    return (
      <form name="bookTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <input type="number" name="travellerage" placeholder="Age" />
        <input type="number" name="travellerphone" placeholder="Phone" />
        <input type="email" name="travelleremail" placeholder="Email" />
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
    this.state = { travellers: [], selector: 1};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  setSelector(value)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
  }
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    console.log(this.state.travellers);
  }
  loadData() {
    setTimeout(() => {
      this.setState({travellers: initialTravellers, ID: currentID});
    }, 500);
  }

  bookTraveller(passengername, passengerage, passengerphone, passengeremail) {
	  /*Q4. Write code to add a passenger to the traveller state variable.*/
    console.log("addTraveller: ", passengername, passengerage, passengerphone, passengeremail);
    //actural add
    var ID = this.state.ID + 1;
    var newpassenger =  {
      id: ID, name: passengername, age: passengerage, phone: passengerphone,
      email: passengeremail, bookingTime: new Date()
    };
    this.state.travellers.push(newpassenger);
    this.setState({ID: ID});
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
    var newlist = []
    this.state.travellers.forEach(element => {
      if (element.name != passenger){newlist.push(element)};
    });
    this.setState({travellers:newlist})
    console.log(this.state.travellers);
    console.log(newlist)

  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
	<div>
	    {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
	</div>
	<div>
		{/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
		{/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
		{/*Q3. Code to call component that Displays Travellers.*/}
		
		{/*Q4. Code to call the component that adds a traveller.*/}
    <Add addfunction={this.bookTraveller}/>
		{/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
    <Delete deletefunction={this.deleteTraveller}/>
	</div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
