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
    // console.log(values.player0, values.player1);
    if (values.player0 !== undefined)
      this.props.history.push({ pathname: '/ai', values: values });
    if (values.player1 !== undefined)
      this.props.history.push({ pathname: '/players', values: values });
  };
  render() {
    return (
      <div>
        <Row justify="center">
          <h1>TIC-TAC-TOE</h1>
        </Row>
        <Row justify="center">
          <Card title="Name of Players" bordered={false}>
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
    );
  }
}

export default Home;
