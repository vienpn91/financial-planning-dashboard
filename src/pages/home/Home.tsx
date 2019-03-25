import React from 'react';
import Yup from 'yup';
import { Formik, Form as Formk } from 'formik';
import { FormInput } from '../../components/Elements/index';

export interface FormValues {
  email: string;
  password?: string;
}

class Home extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div>
        <Formik
          // ref={(form) => { this.form = form; }}
          onSubmit={() => {
            // console.log({ values, actions });
            // alert(JSON.stringify(values, null, 2));
            // actions.setSubmitting(false)
         }}
          initialValues={{ email: 'meo.wizard@gmail.com' }}
          // validationSchema={NewEventFormSchema}
          enableReinitialize
        >
          <Formk>
            <FormInput name="email" title="Email" type="email" />
          </Formk>
        </Formik>
      </div>
    );
  }
}

export default Home;
