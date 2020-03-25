import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

class New extends Component {
  state = {
    data: Array(9).fill(null),
    element: true,
    tie: 0,
    player: 'x'
  };

  handleClick = int => {
    let newdata = this.state.data;

    newdata[int] = this.state.player;
    this.setState({ data: newdata, player: this.state.player === 'x' ? 'o' : 'x' });
  };

  render() {
    const { data } = this.state;
    console.log(data);
    const Td = ({ int, value }) => {
      return (
        <td style={{ cursor: 'pointer', height: 48, width: 40 }} onClick={() => this.handleClick(int)}>
          {value}
        </td>
      );
    };
    return (
      <React.Fragment>
        <Row type="flex" justify="center">
          <h2>TIC TAC TOE</h2>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <Button type="primary">Restart</Button>
          </Col>
        </Row>
        {/* <Row type="flex" justify="center">
          status
          </Row> */}
        <Row type="flex" justify="center" style={{ padding: '5px' }}>
          <Col>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <Td int="0" value={data[0]} />
                  <Td int="1" value={data[1]} />
                  <Td int="2" value={data[2]} />
                </tr>
                <tr>
                  <Td int="3" value={data[3]} />
                  <Td int="4" value={data[4]} />
                  <Td int="5" value={data[5]} />
                </tr>
                <tr>
                  <Td int="6" value={data[6]} />
                  <Td int="7" value={data[7]} />
                  <Td int="8" value={data[8]} />
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default New;
