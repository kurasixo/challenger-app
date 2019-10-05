import React from 'react';

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

    const dateTime = this.getNewDateTime();
    this.state = dateTime;
  }

  getNewDateTime = () => {
    const dateTime = new Date();
    const hours = this.formatDateTime(dateTime.getHours());
    const minutes = this.formatDateTime(dateTime.getMinutes());

    const time = `${hours}:${minutes}`;
    const date = this.formatDateTime(dateTime.getDate());

    return {
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
      const dateTime = this.getNewDateTime();

      this.setState(dateTime);
    }, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <div
          style={{
            top: '5em',
            left: '5em',
            lineHeight: 0.8,
            color: 'white',
            display: 'flex',
            position: 'absolute',
          }}
        >
          <div
            style={{
              fontSize: '5em',
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
                style={{ fontSize: '2em' }}
              >
                {this.state.date}
              </div>

              <div style={{ fontSize: '0.8em' }}>{months[this.state.month]}</div>

              <div style={{ fontSize: '0.8em' }}>{this.state.year}</div>
            </div>

            <div
              style={{ flex: 1, fontSize: '3em' }}
            >
              {weekDays[this.state.day]}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Time;
