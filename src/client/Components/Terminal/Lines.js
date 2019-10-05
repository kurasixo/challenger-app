import React from 'react';

export const Lines = ({ children }) => {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        flex: 1,
        alignSelf: 'flex-start',
        overflow: 'scroll',
        width: '100%',
      }}
    >
      {children}
    </ul>
  );
};

export const Line = ({ children }) => {
  return (
    <li
      style={{
        color: 'white',
        marginTop: '0.15rem',
      }}
    >
      {children}
    </li>
  );
};


export class ActiveLine extends React.Component {
  state = { text: '' }

  onChange = (event) => {
    this.setState({ text: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(`$ ${this.state.text}`);
    this.setState({ text: '' });
  }

  render() {
    return (
      <Line>
        <form
          onSubmit={this.onSubmit}
          style={{ width: '100%', margin: 0 }}
        >
          <label style={{ height: 'calc(12px + 0.25vw)' }}>$ </label>

          <input
            id="activeLine"
            autoComplete="off"
            onChange={this.onChange}
            style={{
              fontFamily: 'inherit',
              border: 'none',
              color: 'white',
              backgroundColor: 'grey',
              fontSize: 'calc(12px + 0.25vw)',
              outline: 'none',
              width: '90%',
            }}
            value={this.state.text}
          />
        </form>
      </Line>
    );
  }
}

export const BottomLine = () => {
  return (
    <div>
      ~/hackme/projects/
    </div>
  );
};
