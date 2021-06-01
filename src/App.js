// import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';
// import { SearchBox} from '../src/components/search-index/search-box.component';
import { CardList } from '../src/components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []    ,
      searchField: ''  
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response =>
      response.json()).then(users =>
        // console.log(users)
        this.setState({ monsters: users}));
      
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(mons => mons.name.toLowerCase().includes(searchField.toLowerCase()));
    // console.log(filteredMonsters);
    return (
      <div className="App">
       <h1> Monsters Rolodex</h1>
       {/* <input type="search" onChange={
         e=> {
            this.setState({searchField: e.target.value});
            // this.setState({searchField: e.target.value}, () => {
            //   console.log(this.state);
            // });
            
         }} placeholder="search monsters"/> */}
         <SearchBox placeholder="search monsters" 
         handleChange={this.handleChange}></SearchBox>
       {/* <SearchBox  onSearchChange={this.onSearchChange} ></SearchBox> */}
       {/* <CardList monsters= {this.state.monsters}>
        
       </CardList> */}
       <CardList monsters= {filteredMonsters}> </CardList>
      </div>
      // <div className="App">
      //   { 
      //     this.state.monsters.map(monster =>
      //        <h1 key={monster.id}>{monster.name}</h1>)
      //   }
      // </div>

      // <div className="App">
      // <header className="App-header">
      //    <img src={logo} className="App-logo" alt="logo" />
      //    <p>
      //      {this.state.strings}
      //     {/* Edit <code>src/App.js</code> and save to reload. */}
      //   </p>
      //   <button onClick={() => this.setState({strings: 'Hello Lawrence, welcome back'})}>Change Text</button>
      //   {/* <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer" >
      //   Learn React        </a> */}
      // </header>
      // </div>
      )
  }
}

export default App;
