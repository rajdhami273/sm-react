import './App.css';
import { TextInput } from './components/TextInput';
import { ListItems } from './components/ListItems';
import React, { useState } from 'react';



// Container
//   TextInput AddButton
//   List of items
//     item 1    x
//     item 2    x
//     item 3    x

// function App() {
//   const [items, setItems] = useState([])
//   const [items1, setItems1] = useState([])
//   const [items2, setItems2] = useState([])
//   return <div className='container'>
//     <TextInput listItems={items} setListItems={setItems} />
//     <ListItems listItems={items} />
//   </div>
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  setItems (value) {
    console.log(value)
    this.setState({items: value})
  }

  render () {
    return <div className='container'>
      <TextInput listItems={this.state.items} setListItems={value => this.setItems(value)} />
      <ListItems listItems={this.state.items} />
    </div>
  }
}

export default App;
