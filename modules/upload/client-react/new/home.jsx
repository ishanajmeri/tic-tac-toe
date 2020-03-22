import React, { Component } from 'react';
import { withFormik } from 'formik';
// import { Form } from 'formik';
// import { RenderField, LayoutCenter, Button } from '@gqlapp/look-client-react';
import { LayoutCenter } from '@gqlapp/look-client-react';
// import { FieldAdapter as Field } from '@gqlapp/forms-client-react';

import { minLength, required, validate } from '@gqlapp/validation-common-react';
import { PropTypes } from 'prop-types';
// import { DownOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const formsFormSchema = {
  player1: [required, minLength(4)],
  player2: [required, minLength(4)]
};

class App extends Component {
  render() {
    const { SubMenu } = Menu;
    // const { values, handleSubmit, errors } = this.props;
    return (
      <LayoutCenter>
        <Menu style={{ width: 256 }} mode="inline">
          <SubMenu key="sub1" title={<span>With AI</span>}>
            <Menu.Item key="1">name</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>2 players</span>}>
            <Menu.Item key="2">name1</Menu.Item>
            <Menu.Item key="3">name2</Menu.Item>
          </SubMenu>
        </Menu>
        {/* <h2 className="text-center">Name of Players </h2>
        <Form onSubmit={handleSubmit}>
          <Field
            name="player1"
            component={RenderField}
            type="text"
            value={values.player1}
            label="Player1"
          />
          <Field
            name="player2"
            component={RenderField}
            type="text"
            value={values.player2}
            label="Player2"
          />

          <Button
            color="primary"
            type="submit"
            disabled={errors.player1 || errors.player2}
          >
            Submit
          </Button>
        </Form> */}
      </LayoutCenter>
    );
  }
}

const Home = withFormik({
  mapPropsToValues() {
    return {
      player1: '',
      player2: ''
    };
  },
  handleSubmit(values, { props }) {
    props.history.push({ pathname: '/game', values: values });
  },
  validate: values => validate(values, formsFormSchema)
});
export default Home(App);

App.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object
};
