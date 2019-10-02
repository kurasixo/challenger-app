import React from 'react';

class App extends React.Component {
  generate = () => {
    console.log('generate');
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.generate}
      >
        Generate
      </button>
    );
  }
}

export default App;
