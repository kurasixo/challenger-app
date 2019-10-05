import React from 'react';
import { connect } from 'react-redux';

import { windowTitles } from '../../utils/consts';
import { openWindow } from '../../modules/windows/store/actions';

import TerminalView from './TerminalView';
import {
  Line,
  Lines,
  ActiveLine,
  BottomLine,
} from './Lines';

@connect(null, { openWindow })
class Terminal extends React.Component {
  state = { lines: [] }

  componentDidMount() {
    const windowObj = {
      name: windowTitles.TerminalWindow,
      meta: {
        opensOnMount: true,
      },
    };

    this.props.openWindow(windowObj);
  }

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
      <TerminalView
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
      >
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
