import React, { Component } from 'react';
import { Row, Card, Form, Radio, Input } from 'antd';
class Home extends Component {
  state = {
    key: 1,
    required: true,
  };
  onChange = (e) => {
    this.setState({ key: e.target.value });
  };
  handleValuesChange = (e) => {
    console.log(e, 'value');
  };
  render() {
    return (
      <div>
        <Row justify="center">
          <h1>TIC-TAC-TOE</h1>
        </Row>
        <Row justify="center">
          <Card title="Name of Players">
            <Row>
              <Radio.Group onChange={this.onChange} value={this.state.key}>
                <Radio value={1}>AI</Radio>
                <Radio value={2}>2 players</Radio>
              </Radio.Group>
            </Row>
            <br />
            <Form onValuesChange={this.handleValuesChange}>
              {this.state.key === 1 && (
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: !this.state.required }]}
                >
                  <Input />
                </Form.Item>
              )}
              {this.state.key === 2 && (
                <>
                  <Form.Item
                    label="Player1"
                    name="player1"
                    rules={[{ required: this.state.required }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Player2"
                    name="player2"
                    rules={[{ required: this.state.required }]}
                  >
                    <Input />
                  </Form.Item>
                </>
              )}
            </Form>
          </Card>
        </Row>
      </div>
    );
  }
}

export default Home;
