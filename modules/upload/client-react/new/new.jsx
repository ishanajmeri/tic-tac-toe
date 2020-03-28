import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { PropTypes } from 'prop-types';

class New extends Component {
  state = {
    data: Array(9).fill(null),
    element: true,
    tie: 0,
    huPlayer: 'O',
    aiPlayer: 'X',
    lines: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    availableSpots: []
  };
  isWinner = data => {
    const { lines } = this.state;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (data[a] === data[b] && data[a] === data[c]) return data[a];
    }
    return null;
  };

  handleClick = int => {
    const { huPlayer, aiPlayer } = this.state;
    var { availableSpots: availableSports } = this.state;
    const data = [...this.state.data];
    if (data[int] === 'X' || data[int] === 'O') return;
    if (this.isWinner(data) || data[int]) {
      return;
    }
    data[int] = huPlayer;
    this.setState({ data });
    const iterator = data.keys();
    for (var key of iterator) {
      if (data[key] === null) {
        availableSports.push(key);
      }
    }
    this.setState({ availableSports });
    this.bestSport(data);
    data[this.bestSport(data)] = aiPlayer;
  };

  bestSport = data => {
    const { aiPlayer } = this.state;
    const inx = this.minimax(data, aiPlayer).index;
    return inx;
  };

  checkWinner = (data, player) => {
    // console.log('checkWinner');
    const { lines } = this.state;
    let plays = data.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
    let gameWon = null;
    for (let [index, win] of lines.entries()) {
      if (win.every(elem => plays.indexOf(elem) > -1)) {
        gameWon = { index: index, player: player };
        break;
      }
    }
    return gameWon;
  };

  minimax = (data, player) => {
    const { huPlayer, aiPlayer } = this.state;
    var { availableSpots } = this.state;

    if (this.checkWinner(data, huPlayer)) {
      return { score: -10 };
    } else if (this.checkWinner(data, aiPlayer)) {
      return { score: 10 };
    } else if (availableSpots.length === 0) {
      return { score: 0 };
    }
    var moves = [];
    for (var i = 0; i < availableSpots.length; i++) {
      var move = {};
      move.index = availableSpots[i];
      data[availableSpots[i]] = player;
      if (player === aiPlayer) {
        var result = this.minimax(data, huPlayer);
        move.score = result.score;
      } else {
        result = this.minimax(data, aiPlayer);
        move.score = result.score;
      }
      data[availableSpots[i]] = move.index;
      moves.push(move);
    }

    var bestMove;
    if (player === aiPlayer) {
      var bestScore = -10000;
      for (i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = move[i].score;
          bestMove = i;
        }
      }
    } else {
      bestScore = 10000;
      for (i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
    // return 5;
  };

  handleRestart = () => {
    let data = [...this.state.data];
    data = Array(9).fill(null);
    this.setState({ data: data });
  };

  render() {
    const { data } = this.state;
    const Td = ({ int, value }) => {
      return (
        <td style={{ cursor: 'pointer', height: 48, width: 40 }} onClick={() => this.handleClick(int)}>
          {value}
        </td>
      );
    };
    // const winner = this.isWinner(data);
    // let { tie } = this.state;
    // const { values } = this.props.location;
    return (
      <React.Fragment>
        <Row type="flex" justify="center">
          <h2>TIC TAC TOE</h2>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <Button type="primary" onClick={this.handleRestart}>
              Restart
            </Button>
          </Col>
        </Row>
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

New.propTypes = {
  location: PropTypes.object,
  values: PropTypes.object,
  player1: PropTypes.string,
  player2: PropTypes.string
};

// handlePlayer1 (dum AI)= int => {
//   const { element } = this.state;
//   let { tie } = this.state;
//   const data = [...this.state.data];
//   if (data[int] === 'x' || data[int] === 'o') return;
//   if (this.isWinner(data) || data[int]) {
//     return;
//   }
//   data[int] = element ? 'X' : 'O';
//   const isEmpty = event => event === null;
//   const index = data.findIndex(isEmpty);
//   data[index] = element ? 'O' : 'X';

//   this.setState({ data: data, element: element, tie: tie + 1 });
// };
