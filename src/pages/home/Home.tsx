import React from 'react';
import * as Yup from 'yup';
import _ from 'lodash';
import { withFormik, Formik, Form as Formk, FormikActions } from 'formik';
import { FormInput } from '../../components/Elements/index';
import { Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

// const LogInSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Required'),
//   password: Yup.string().required('Require'),
// });

class Home extends React.PureComponent {
  public render(): JSX.Element {
    const options = _.times(4, (i) => ({ value: i + 1, label: JSON.stringify(i + 1) }));

    return (
      <div>
        <Formik
          // ref={(form) => { this.form = form; }}
          onSubmit={(values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          initialValues={{ email: '', password: '' }}
          // validationSchema={LogInSchema}
          enableReinitialize
        >
          <Formk>
            <FormInput type="text" name="email" placeholder="Email" prefix={<Icon type="mail" theme="filled" />} />
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              prefix={<Icon type="lock" theme="filled" />}
            />
            <FormInput type="checkbox" name="checkbox" placeholder="Remember me" />
            <Link to="/#forgot-password">Forgot Password</Link>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>

            <div>
              <FormInput type="number" name="quantity" placeholder="Quantiy" min={0} max={10} />
              <FormInput type="select" name="select" placeholder="Select" showSearch={true} options={options} />
            </div>
          </Formk>
        </Formik>
      </div>
    );
  }
}

export default Home;
