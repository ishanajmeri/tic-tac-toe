import React, { Component } from 'react';
import { withFormik, Form } from 'formik';
import { RenderField, LayoutCenter, Button } from '@gqlapp/look-client-react';
import { FieldAdapter as Field } from '@gqlapp/forms-client-react';
import { minLength, validate } from '@gqlapp/validation-common-react';
import { PropTypes } from 'prop-types';
import { Menu } from 'antd';

const formsFormSchema = {
  player0: [minLength(4)],
  player1: [minLength(4)],
  player2: [minLength(4)]
};

class App extends Component {
  state = {
    openKeys: ['']
  };

  rootSubmenuKeys = ['sub1', 'sub2'];

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  render() {
    const { SubMenu } = Menu;
    const { values, handleSubmit, errors } = this.props;
    console.log(values);
    return (
      <LayoutCenter>
        <h2 className="text-center">Name of Players </h2>
        <Form onSubmit={handleSubmit}>
          <Menu style={{ width: 256 }} mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
            <SubMenu key="sub1" title={<span>With AI</span>}>
              <Field name="player0" component={RenderField} type="text" value={values.player0} label="Player0" />
            </SubMenu>
            <SubMenu key="sub2" title={<span>2 players</span>}>
              <Field name="player1" component={RenderField} type="text" value={values.player1} label="Player1" />
              <Field name="player2" component={RenderField} type="text" value={values.player2} label="Player2" />
            </SubMenu>
          </Menu>
          <Button color="primary" type="submit" disabled={errors.player0 && (errors.player1 || errors.player2)}>
            Submit
          </Button>
        </Form>
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
    if (values.player0 !== ' ') props.history.replace({ pathname: '/game', values: values });
    if (values.player1 !== ' ') props.history.replace({ pathname: '/new', values: values });
  },
  validate: values => validate(values, formsFormSchema)
});
export default Home(App);

App.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object
};
