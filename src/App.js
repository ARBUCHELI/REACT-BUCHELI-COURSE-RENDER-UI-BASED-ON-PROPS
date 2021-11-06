import React from 'react';
import { Greeting } from './Greeting';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting 
          name="Alison"
          signedIn={false}
        />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

