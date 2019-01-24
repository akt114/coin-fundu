import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/common/Header'
// // import './components/common/Search'
import List from './components/list/List'
import Detail from './components/detail/Detail'
import NotFound from './components/notfound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    
      return (
        
        // <div>
        //   <Header/>
        //   <List/>
          
        // </div>
        <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/currency/:id" component={Detail} exact />
          <Route component={NotFound} />
        </Switch>
    </div>
    </BrowserRouter>
        
      );
  }
}

export default App;
