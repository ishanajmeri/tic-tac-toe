import React, { Component } from 'react';
import { Row, Col, Button, Alert } from 'antd';
class Players extends Component {
  state = {
    data: Array(9),
    element: true,
    tie: 0,
  };
  UNSAFE_componentWillMount() {
    if (this.props.location.values === undefined) {
      return this.props.history.push('/');
    }
  }

  isWinner = (data) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [0, 4, 8],
      [2, 5, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (data[a] === data[b] && data[a] === data[c]) return data[a];
    }
    return null;
  };

  handleClick = (int) => {
    const { element } = this.state;
    let { tie } = this.state;
    const data = [...this.state.data];
    if (data[int] === 'X' || data[int] === 'O') return;
    if (this.isWinner(data) || data[int]) {
      return;
    }
    data[int] = element ? 'X' : 'O';
    this.setState({ data: data, element: !element, tie: tie + 1 });
  };
  handleRestart = () => {
    let data = [...this.state.data];
    data = Array(9).fill(null);
    this.setState({ data: data, element: true, tie: 0 });
  };
  render() {
    const Td = ({ int, value }) => {
      return (
        <td
          style={{
            cursor: 'pointer',
            height: 48,
            width: 40,
            border: '1px solid black',
            textAlign: 'center',
          }}
          onClick={() => this.handleClick(int)}
        >
          {value}
        </td>
      );
    };
    const { data, element } = this.state;
    const winner = this.isWinner(data);
    let { tie } = this.state;
    const { values } = this.props.location;
    let status = 'none';
    if (this.props.location.values !== undefined) {
      if (winner) {
        if (winner === 'X') status = 'winner : ' + values.player1;
        if (winner === 'O') status = 'Winner : ' + values.player2;
      } else if (tie === 9) {
        status = "It's draw";
      } else {
        status = (element ? values.player1 : values.player2) + "'s turn";
      }
    }

    return (
      this.props.location.values !== undefined && (
        <React.Fragment>
          <div
            style={{
              height: '100vh',
            }}
          >
            <Row type="flex" justify="center" style={{ paddingTop: '4%' }}>
              <h1
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '44px',
                }}
              >
                TIC-TAC-TOE
              </h1>
            </Row>
            <Row type="flex" justify="center">
              <Col>
                <Button type="primary" onClick={this.handleRestart}>
                  Restart
                </Button>
              </Col>
            </Row>
            {(status === `${values.player1}'s turn` ||
              status === `${values.player2}'s turn`) && (
              <Row type="flex" justify="center">
                <Col>
                  <h3
                    style={{
                      padding: '10px',
                      alignSelf: 'center',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '24px',
                    }}
                  >
                    {status}
                  </h3>
                </Col>
              </Row>
            )}
            <Row type="flex" justify="center" style={{ padding: '5px' }}>
              <Col>
                <table style={{ border: '1px solid black' }}>
                  <tbody>
                    <tr style={{ border: '1px solid black' }}>
                      <Td int="0" value={data[0]} />
                      <Td int="1" value={data[1]} />
                      <Td int="2" value={data[2]} />
                    </tr>
                    <tr style={{ border: '1px solid black' }}>
                      <Td int="3" value={data[3]} />
                      <Td int="4" value={data[4]} />
                      <Td int="5" value={data[5]} />
                    </tr>
                    <tr style={{ border: '1px solid black' }}>
                      <Td int="6" value={data[6]} />
                      <Td int="7" value={data[7]} />
                      <Td int="8" value={data[8]} />
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
            {(status === `winner : ${values.player1}` ||
              status === `winner : ${values.player2}`) && (
              <Row type="flex" justify="center" style={{ padding: '5px' }}>
                <h2>
                  <Alert message={status} />
                </h2>
              </Row>
            )}
          </div>
        </React.Fragment>
      )
    );
  }
}

export default Players;
