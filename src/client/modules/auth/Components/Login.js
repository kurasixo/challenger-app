import React from 'react';
import { connect } from 'react-redux';

import { login } from '../store/actions';
import ClientRenderer from '../../../utils/ClientRenderer';
import DateTimeWidgetProvider from '../../../Components/DateTimeWidget/DateTimeWidgetProvider';

@connect(null, { login })
class Login extends React.Component {
  onSubmit = () => {
    this.props.login();
  }

  render() {
    return (
      <div className="app-wrapper" style={{ backgroundColor: '#313639' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ color: 'white' }}>
            <ClientRenderer>
              <DateTimeWidgetProvider>
                {({ time, weekDay }) => {
                  const dateTime = `${weekDay}, ${time}`;
                  return (
                    <>{dateTime}</>
                  );
                }}
              </DateTimeWidgetProvider>
            </ClientRenderer>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flex: '1',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img src="./avatar-icon.png" alt="" style={{ marginRight: '30px', padding: '3px', width: '50px', height: '50px', border: '2px white solid' }} />
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: '#a8aaa5', fontSize: '12px', fontWeight: '400', marginBottom: '10px' }}>Username:</span>
                <input style={{ padding: '2 10px', color: 'white', backgroundColor: '#282828', fontSize: '16px', borderRadius: '5px' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: '#a8aaa5', fontSize: '12px', fontWeight: '400', marginBottom: '10px' }}>Password:</span>
                <input style={{ padding: '2 10px', color: 'white', backgroundColor: '#282828', fontSize: '16px', borderRadius: '5px' }} type="password" />
              </div>
              <button onClick={this.props.login} style={{ marginTop: '20px', backgroundColor: '#25476a', color: 'white', padding: '5px 20px', alignSelf: 'flex-end', borderRadius: '3px', border: '1px grey solid' }} type="submit">Unlock</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
