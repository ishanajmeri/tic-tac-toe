import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
class AiGame extends Component {
  state = {
    origBoard: [],
    data: Array.from(Array(9).fill(null)),
    tie: 0,
    winner: '',
    huPlayer: 'O',
    aiPlayer: 'X',
    lines: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    availSpots: [],
  };
  UNSAFE_componentWillMount() {
    const origBoard = Array.from(Array(9).keys());
    this.setState({ origBoard });
    if (this.props.location.values === undefined) {
      this.props.history.push('/');
    }
  }
  handleClick = (square) => {
    const { origBoard, huPlayer, aiPlayer, winner } = this.state;
    if (winner === 'X' || winner === 'O' || winner === 'T') return;
    if (typeof origBoard[square] === 'number') {
      this.turn(square, huPlayer);
      if (!this.checkWinner(origBoard, huPlayer) && this.checkTie) {
        this.turn(this.bestSport(origBoard), aiPlayer);
      }
    }
  };

  turn = (squareId, player) => {
    const { data, origBoard } = this.state;
    var { tie } = this.state;
    if (squareId === undefined) return;
    data[squareId] = player;
    origBoard[squareId] = player;
    let gameWon = this.checkWinner(origBoard, player);
    if (gameWon) this.gameOver(gameWon);
    this.setState({ data, origBoard, tie: tie + 1 });
  };

  checkWinner = (data, player) => {
    const { lines } = this.state;
    let plays = data.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);

    let gameWon = '';
    for (let [index, win] of lines.entries()) {
      if (win.every((elem) => plays.indexOf(elem) > -1)) {
        gameWon = { index: index, player: player };
        break;
      }
    }
    return gameWon;
  };

  gameOver = (gameWon) => {
    var { winner } = this.state;
    if (gameWon.player === 'X') {
      winner = 'X';
    } else winner = 'O';
    this.setState({ winner });
  };

  checkTie = () => {
    const { tie } = this.state;
    var { winner } = this.state;
    if (tie === 5) winner = 'T';
    this.setState({ winner });
  };

  bestSport = (origBoard) => {
    const { aiPlayer } = this.state;
    return this.minimax(origBoard, aiPlayer).index;
  };
  emptySquares() {
    const { origBoard } = this.state;
    return origBoard.filter((s) => typeof s === 'number');
  }

  minimax = (newBoard, player) => {
    const { huPlayer, aiPlayer } = this.state;
    var availSpots = this.emptySquares();

    if (this.checkWinner(newBoard, huPlayer)) {
      return { score: -10 };
    } else if (this.checkWinner(newBoard, aiPlayer)) {
      return { score: 10 };
    } else if (availSpots.length === 0) {
      return { score: 0 };
    }

    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
      var move = {};

      move.index = newBoard[availSpots[i]];
      newBoard[availSpots[i]] = player;

      var result;
      if (player === aiPlayer) {
        result = this.minimax(newBoard, huPlayer);
        move.score = result.score;
      } else {
        result = this.minimax(newBoard, aiPlayer);
        move.score = result.score;
      }

      newBoard[availSpots[i]] = move.index;
      moves.push(move);
    }

    var bestMove;
    if (player === aiPlayer) {
      var bestScore = -10000;
      for (i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
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
  };

  handleRestart = () => {
    let data = Array(9).fill(null);
    let origBoard = Array.from(Array(9).keys());
    this.setState({
      origBoard,
      tie: 0,
      availSpots: [],
      data,
      winner: '',
    });
  };

  render() {
    const { data, winner, tie } = this.state;
    // const { values } = this.props.location;

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
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: '#DCDCDC',
            backgroundImage: 'url(./il.jpg)',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'left',
            backgroundPositionY: 'bottom',
            backgroundSize: '30%',
          }}
        >
          <div>
            <Row justify="center" style={{ paddingTop: '4%' }}>
              <h1
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '44px',
                }}
              >
                TIC-TAC-TOE
              </h1>
            </Row>
            <Row justify="center">
              <Col>
                <Button
                  type="primary"
                  onClick={this.handleRestart}
                  style={{ width: '100%' }}
                >
                  Restart
                </Button>
              </Col>
            </Row>
            <Row justify="center" style={{ padding: '5px' }}>
              <Col>
                <table>
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
            {(winner === 'X' || winner === 'O' || tie === 5) && (
              <Row type="flex" justify="center">
                {winner === 'X' && <img src="original.gif" alt="" />}
                {tie === 5 && (
                  <img
                    src="./draw.gif"
                    alt=""
                    style={{ position: 'absolute', height: '35%' }}
                  />
                )}
              </Row>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AiGame;
