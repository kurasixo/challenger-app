import React from 'react';
import Draggable from 'react-draggable';

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class Time extends React.Component {
  constructor(props) {
    super(props);
    const dateTime = new Date();
    const hours = this.formatDateTime(dateTime.getHours());
    const minutes = this.formatDateTime(dateTime.getMinutes());

    const time = `${hours}:${minutes}`;
    const date = this.formatDateTime(dateTime.getDate());

    this.state = {
      time,
      date,
      day: dateTime.getDay(),
      month: dateTime.getMonth(),
      year: dateTime.getFullYear(),
    };
  }

  formatDateTime = (dateTime) => {
    let innerDateTime = dateTime;

    if (innerDateTime < 10) {
      innerDateTime = `0${innerDateTime}`;
    }

    return innerDateTime;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const dateTime = new Date();
      const hours = this.formatDateTime(dateTime.getHours());
      const minutes = this.formatDateTime(dateTime.getMinutes());

      const time = `${hours}:${minutes}`;
      const date = this.formatDateTime(dateTime.getDate());

      this.setState({
        time,
        date,
        day: dateTime.getDay(),
        month: dateTime.getMonth(),
        year: dateTime.getFullYear(),
      });
    }, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Draggable>
        <div
          style={{
            top: 100,
            lineHeight: 0.9,
            color: 'white',
            display: 'flex',
            position: 'absolute',
            border: '5px solid red',
            cursor: 'grab',
          }}
        >
          <div
            style={{
              fontSize: '10em',
              paddingRight: '0.2em',
            }}
          >
            {this.state.time}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{ fontSize: '5em' }}
              >
                {this.state.date}
              </div>

              <div style={{ fontSize: '2em' }}>{months[this.state.month]}</div>

              <div style={{ fontSize: '2em' }}>{this.state.year}</div>
            </div>

            <div
              style={{ flex: 1, fontSize: '5em' }}
            >
              {weekDays[this.state.day]}
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Time;
