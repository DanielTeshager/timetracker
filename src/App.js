import './App.css';
import Sidebar from './components/Sidbar';
import CardList from './components/CardList';
import data from './data.json';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
class App extends React.Component{
  // initialize state
  constructor(props){
    super(props);

    this.state = {
      data: [],
    }
  }
  // handle schedule change -> update the DOM
  handleClick = (id='daily') => {
    // filter timeframes by id
    let filtered = data.map(item => {
      return(
        {
        'title':item.title,
        'timeframes':{[id] : item.timeframes[id]}
      }
      );
      });
    // set state
    this.setState({
      data: filtered
    });
  }
  // lifecycle method
  componentDidMount = () => {
    this.handleClick();
  }

  // shedule filters
  filters = Object.keys(data[0].timeframes);

  render () {
    return (
      <div className="App">
      <main>
         <Sidebar filters={this.filters} onClick={this.handleClick} />
         <CardList data={this.state.data} />
        </main> 
     </div>
    );
}

}
export default App;
