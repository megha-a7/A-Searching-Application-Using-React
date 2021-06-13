import React, {Component} from 'react';
import { Container, Jumbotron } from 'react-boostrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component() {
  render(){
    return (
      <div>
        <Jumbotron>
        /*A lightweight, flexible component that can optionally extend the entire viewport 
        to showcase key content on your site.*/
          <Container>
            <h1>Search App</h1>
            <p>This is a simple search app.</p>
            
            <SeacrhForm />
          </Container>  
        </Jumbotron>
        <Results />
      </div>
    );

  }
  
}

export default App;
