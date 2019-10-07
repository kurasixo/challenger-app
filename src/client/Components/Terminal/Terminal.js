import React from 'react';
import { connect } from 'react-redux';

import Window from '../../modules/windows/Components/Window';
import { closeWindow } from '../../modules/windows/store/actions';

import TerminalView from './TerminalView';
import {
  Line,
  Lines,
  ActiveLine,
  BottomLine,
} from './Lines';

@connect(null, { closeWindow })
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
      <Window
        window={this.props.window}
        onFocus={this.props.onFocus}
        onClose={this.props.closeWindow}
        isCurrentWindowVisible={this.props.isCurrentWindowVisible}
      >
        <TerminalView
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
        >
          <Lines>
            {this.state.lines.map(this.renderLine)}
            <ActiveLine
              onSubmit={this.onSubmit}
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
