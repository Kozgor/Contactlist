import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import uuid from "uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import ContactList from "./Components/ContactList/ContactList";
import AddContact from './Components/ContactList/AddContact/AddContact';
import Header from './Components/Header/Header';

class App extends React.Component {
  currendID = 1000;
  state = {
    List: [
      {
        id: uuid(),
        name: "Oleg Vunnuk",
        address: "Logovo Vovchutsi",
        phone: "(097)-714-8701",
        email: "truevunnuk@ukr.net",
        avatar: 88,
        gender: 'men',
        star: false
    },
    {
        id:uuid(),
        name: "John Snow",
        address: "Castle Black",
        phone: "(096)-711-5602",
        email: "truetargarien@ukr.net",
        avatar: 70,
        gender: 'men',
        star: false
    },
    {
        id:uuid(),
        name: "John Wick",
        address: "1st WallStreet Court, Continental, room number 44",
        phone: "(099)-000-0099",
        email: "ilovemydog@ukr.net",
        avatar: 55,
        gender: 'men',
        star: false
    },
    {
        id:uuid(),
        name: "Cleopatra",
        address: "Cairo",
        phone: "none",
        email: "none",
        avatar: 1,
        gender: 'women',
        star: false
    },
    {
        id: uuid(),
        name: "Spider Man",
        address: "Forest Hills 20, NY",
        phone: "(093)-123-4567",
        email: "bigpowerisbigresponsibility@ukr.net",
        avatar: 65,
        gender: 'men',
        star: false
    }
    ]
  };

  onStarChange = id => {
    this.setState(() => {
      const index = this.state.List.findIndex(elem => elem.id === id);
      const tmpList = this.state.List.slice();
      tmpList[index].star = !tmpList[index].star;
      return {
        star: !this.tmpList
      };
    });
  };

  onAddContact = (name, address, telnumber, email,avatar) => {
    let newContact = {
        id : uuid(),
        name: name,
        address: address,
        avatar: avatar,
        phone: telnumber,
        gender: "men",
        email: email,
        star: false
    };
    const newList = [...this.state.List, newContact];
    this.setState({
      List: newList
    });//async function
    /*this.setState(state=>{ 
      return {
        List:newList
      }
    });*/
  };
  onDeleteContact = id =>{
    const index = this.state.List.findIndex(elem => elem.id === id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index +1);
    const newArrey = [...partOne, ...partTwo]
    this.setState(() =>{
      return{List: newArrey}
    })
  }
  render() {
    return (
      <div className="maindiv">
        <div id="card_contacts">
          <div
            id="contacts"
            className="panel-collapse collapse show"
            aria-expanded="true"
          >
          <Router>
          <Header />
            <Switch>
              <Route path="/"
              exact 
              render={()=>(
              <ContactList List={this.state.List} onStarChange={this.onStarChange} onDeleteContact={this.onDeleteContact} />)}/>

              <Route path="/contact"
              exact
              render={()=>(
              <AddContact onAddContact={this.onAddContact} />)} />
            </Switch>
          </Router>
            
            {/*
            <ContactList
              List = {this.state.List}
              onStarChange = {this.onStarChange}
              onDeleteContact = {this.onDeleteContact}
            />
            <AddContact onAddContact={this.onAddContact} />*/}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));