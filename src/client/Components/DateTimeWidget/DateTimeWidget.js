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

class DateTimeWidget extends React.Component {
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
        <div className="datetime-widget-wrapper">
          <div className="datetime-widget-time">
            {this.state.time}
          </div>

          <div className="datetime-widget-date-wrapper">
            <div className="datetime-widget-date-top">
              <div className="datetime-widget-date-large">
                {this.state.date}
              </div>

              <div className="datetime-widget-date-medium">{months[this.state.month]}</div>

              <div className="datetime-widget-date-medium">{this.state.year}</div>
            </div>

            <div className="datetime-widget-date-large">
              {weekDays[this.state.day]}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DateTimeWidget;
