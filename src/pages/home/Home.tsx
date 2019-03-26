import React from 'react';
import Yup from 'yup';
import _ from 'lodash';
import { Formik, Form as Formk, FormikActions, Field } from 'formik';
import { FormInput } from '../../components/Elements/index';
import { Icon, Button, Form } from 'antd';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

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
          // validationSchema={NewEventFormSchema}
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
            <Form.Item>
              <Link to="/#forgot-password">Forgot Password</Link>
            </Form.Item>
            <FormInput type="number" name="quantity" placeholder="Quantiy" min={0} max={10} />
            <FormInput type="select" name="select" placeholder="Select" showSearch={true} options={options} />
            {/* <FormInput type="date" name="date" placeholder="Date" /> */}
            {/* <FormInput type="textarea" name="textarea" placeholder="Text Area" /> */}
            {/* <Field name="email" component={InputField} prefix={<Icon type="mail" theme="filled" />} />  */}
            <Button type="primary">Log In</Button>
          </Formk>
        </Formik>
      </div>
    );
  }
}

export default Home;
