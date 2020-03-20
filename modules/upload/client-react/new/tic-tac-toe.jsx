import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { PropTypes } from 'prop-types';

class Game extends Component {
  state = {
    data: Array(9),
    element: true,
    tie: 0
  };

  isWinner = data => {
    // let temp = null;
    // eslint-disable-next-line prettier/prettier
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (data[a] === data[b] && data[a] === data[c]) return data[a];
    }
    return null;
  };

  handleClick = int => {
    const { element } = this.state;
    let { tie } = this.state;
    const data = [...this.state.data];
    if (data[int] === 'x' || data[int] === 'o') return;
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
        // eslint-disable-next-line prettier/prettier
        <td
          style={{ cursor: 'pointer', height: 48, width: 40 }}
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
    if (winner) {
      console.log(values.player1, 'player1');
      if (winner === 'X') status = 'winner : ' + values.player1;
      if (winner === 'O') status = 'Winner : ' + values.player2;
    } else if (tie === 9) {
      status = 'its draw';
    } else {
      status = (element ? values.player1 : values.player2) + "'s turn";
    }
    return (
      <React.Fragment>
        <Row type="flex" justify="center" bordered>
          <h2>TIC TAC TOE</h2>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <Button type="primary" onClick={this.handleRestart}>
              Restart
            </Button>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <div>
              <div>{status}</div>
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
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Game;

Game.propTypes = {
  location: PropTypes.object,
  values: PropTypes.object,
  player1: PropTypes.string,
  player2: PropTypes.string
};