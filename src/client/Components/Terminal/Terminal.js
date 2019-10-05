import React from 'react';
import TerminalView from './TerminalView';
import {
  Line,
  Lines,
  ActiveLine,
  BottomLine,
} from './Lines';

class Terminal extends React.Component {
  state = { lines: [] }

  onSubmit = (lineValue) => {
    const validatedLines = this.validateLine(lineValue);

    this.setState({ lines: validatedLines });
  }

  validateLine = (lineValue) => {
    const tokenedLineValue = this.tokenizeLineValue(lineValue);

    if (tokenedLineValue !== 'clear') {
      return [
        ...this.state.lines,
        lineValue,
        `command not found: ${tokenedLineValue}`,
      ];
    }

    return [];
  }

  tokenizeLineValue = (lineValue) => {
    return lineValue.split('$ ')[1];
  }

  renderLine = (line, index) => {
    return (
      <Line key={index}>
        {line}
      </Line>
    );
  }

  render() {
    return (
      <TerminalView>
        <Lines>
          {this.state.lines.map(this.renderLine)}
          <ActiveLine onSubmit={this.onSubmit} />
        </Lines>

        <BottomLine />
      </TerminalView>
    );
  }
}

export default Terminal;
