import { shallow } from 'enzyme';
import { FormikProps } from 'formik';

import Page3 from '../Page3';
// import LoginVerify from '../LoginVerify/LoginVerify';
import { LoginFormValues } from '../LoginForm';

const mockOnSubmit = jest.fn();

interface ComponentProps {
  loading?: boolean;
  message?: string;
  error?: string;
  formProps?: FormikProps<LoginFormValues>;
  onSubmit?: () => void;
}

const setup = (props: ComponentProps = {}) => {
  mockOnSubmit.mockClear();

  const setupProps: ComponentProps = {
    loading: false,
    error: null,
    formProps: {},

    onSubmit: mockOnSubmit,

    ...props,
  };

  return shallow(<Page3 {...setupProps} />);
};

describe('<Page3/>', () => {
  let component = null;
  beforeEach(() => {
    component = setup();
  });

  it('does not throw error with expected props', () => {
    expect(component.length).toBe(1);
  });
});
