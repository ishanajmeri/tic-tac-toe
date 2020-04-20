import React, { Component } from 'react';
import { withFormik, Form } from 'formik';
import { RenderField, LayoutCenter, Button } from '@gqlapp/look-client-react';
import { FieldAdapter as Field } from '@gqlapp/forms-client-react';
import { PropTypes } from 'prop-types';
import { Radio, Card, Row } from 'antd';

function handleValidate(values) {
  const errors = {};
  console.log(values, 'values');
  if (values.player1 && !values.player2) {
    errors.player2 = 'Required';
  }
  if (values.player2 && !values.player1) {
    errors.player1 = 'Required';
  }
  if (values.player0 && values.player1 && values.player2) {
    errors.main = 'inValid';
  }
  if (!values.player1 && !values.player2 && !values.player0) {
    errors.player0 = 'Required';
  }
  if (errors) return false;
  else return true;
}
class App extends Component {
  state = {
    key: 1
  };

  onChange = e => {
    this.setState({ key: e.target.value });
  };
  render() {
    const { values, handleSubmit, errors } = this.props;
    console.log(errors);
    return (
      <LayoutCenter>
        <h1 className="text-center" style={{ fontSize: '50px' }}>
          TIC-TAC-TOE
        </h1>
        <br />
        <Row justify="space-around" align="middle">
          <Card title="Name of Players" style={{ position: 'fixed', left: '40%', top: '25%' }}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Radio.Group onChange={this.onChange} value={this.state.key}>
                  <Radio value={1}>AI</Radio>
                  <Radio value={2}>2 players</Radio>
                </Radio.Group>
              </Row>
              <br />
              {this.state.key === 1 && (
                <Field name="player0" component={RenderField} type="text" value={values.player0} label="Player" />
              )}
              {this.state.key === 2 && (
                <div>
                  <Field
                    name="player1"
                    component={RenderField}
                    type="text"
                    value={values.player1}
                    label="first Player "
                  />
                  <Field
                    name="player2"
                    component={RenderField}
                    type="text"
                    value={values.player2}
                    label="second Player "
                  />
                </div>
              )}
              <br />
              <Row type="flex" justify="center">
                <Button color="primary" type="submit" disabled={true && handleValidate(values)}>
                  Submit
                </Button>
              </Row>
            </Form>
          </Card>
        </Row>
      </LayoutCenter>
    );
  }
}

const Home = withFormik({
  mapPropsToValues() {
    return {
      player0: '',
      player1: '',
      player2: ''
    };
  },
  handleSubmit(values, { props }) {
    if (values.player0 !== '') props.history.push({ pathname: '/AI', values: values });
    if (values.player1 !== '') props.history.push({ pathname: '/game', values: values });
  },
  validate: values => handleValidate(values)
});
export default Home(App);

App.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object
};
