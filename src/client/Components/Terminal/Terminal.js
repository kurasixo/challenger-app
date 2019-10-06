import React from 'react';

import Window from '../../modules/windows/Components/Window';

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
      <Window onFocus={this.props.onFocus}>
        <TerminalView
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          isCurrentWindowVisible={this.props.isCurrentWindowVisible}
        >
          <Lines>
            {this.state.lines.map(this.renderLine)}
            <ActiveLine
              onSubmit={this.onSubmit}
              onBlur={this.props.onBlur}
              onFocus={this.props.onFocus}
              withFocusPropRef={this.props.withFocusPropRef}
            />
          </Lines>

          <BottomLine />
        </TerminalView>
      </Window>
    );
  }
}

export default Terminal;
