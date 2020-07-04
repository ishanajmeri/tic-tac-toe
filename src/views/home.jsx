import React, { Component } from 'react';
import { Row, Card, Form, Radio, Input, Button } from 'antd';
class Home extends Component {
  state = {
    key: 1,
    required: true,
  };
  onChange = (e) => {
    this.setState({ key: e.target.value });
  };
  handleValuesChange = (e) => {
    if (e.player0 !== '') {
      this.setState({ required: !this.state.required });
    }
  };
  handleFinish = (values) => {
    if (values.player0 !== undefined)
      this.props.history.push({ pathname: '/ai', values: values });
    if (values.player1 !== undefined)
      this.props.history.push({ pathname: '/players', values: values });
  };
  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'revert',
            transform: 'translate(-50%,-50%)',
            zIndex: '-1',
          }}
        >
          <source src="./dog.mp4" type="video/mp4" />
        </video>
        <div>
          <Row justify="center" style={{ paddingTop: '10%' }}>
            <h1
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '44px',
                color: 'BurlyWood',
              }}
            >
              TIC-TAC-TOE
            </h1>
          </Row>
          <Row justify="center">
            <Card
              title="Name of Players"
              bordered={false}
              style={{ backgroundColor: 'transparent' }}
            >
              <Row>
                <Radio.Group onChange={this.onChange} value={this.state.key}>
                  <Radio value={1}>AI</Radio>
                  <Radio value={2}>2 players</Radio>
                </Radio.Group>
              </Row>
              <br />
              <Form
                onValuesChange={this.handleValuesChange}
                onFinish={this.handleFinish}
              >
                {this.state.key === 1 && (
                  <Form.Item
                    name="player0"
                    rules={[
                      {
                        required: this.state.required,
                        message: 'Please enter player name',
                      },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                )}
                {this.state.key === 2 && (
                  <>
                    <Form.Item
                      name="player1"
                      rules={[
                        {
                          required: !this.state.required,
                          message: 'Please enter player 1 name!',
                        },
                      ]}
                    >
                      <Input placeholder="Player 1" />
                    </Form.Item>
                    <Form.Item
                      name="player2"
                      rules={[
                        {
                          required: !this.state.required,
                          message: 'Please enter player 2 name!',
                        },
                      ]}
                    >
                      <Input placeholder="Player 2" />
                    </Form.Item>
                  </>
                )}
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
