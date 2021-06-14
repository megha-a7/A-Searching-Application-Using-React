import React, {Component} from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component  {

  render() {

    return (
      <div>
      
        <Jumbotron>
        
          <Container>
            <h1>A Searching Application</h1>
            <p>This is a outlook of a simple search application.</p>
            
            <SearchForm />
          </Container>  
        </Jumbotron>
        <Results />
      </div>
    );

  }
  
}

export default App;
/*A lightweight, flexible component that can optionally extend the entire viewport 
        to showcase key content on your site - Jumbotron.*/