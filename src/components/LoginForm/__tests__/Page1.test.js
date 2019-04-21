import { shallow } from 'enzyme';

import Page1 from '../Page1';
import { ButtonSignIn } from '../styled';
import { FormInput } from '../../Elements';
import { FormikProps } from 'formik';
import { LoginFormValues } from '../LoginForm';

const mockOnSubmit = jest.fn();

const defaultProps: {
  loading: boolean,
  error?: string,
  formProps: FormikProps<LoginFormValues>,
} = {
  loading: false,
  error: null,
  formProps: {
    values: {},
    errors: {},
  },
};

const setup = (props = {}) => {
  mockOnSubmit.mockClear();

  const setupProps = {
    ...defaultProps,

    onSubmit: mockOnSubmit,

    ...props,
  };

  return shallow(<Page1 {...setupProps} />);
};

describe('<Page1/>', () => {
  let component = null;
  beforeEach(() => {
    component = setup();
  });

  it('does not throw error with expected props', () => {
    expect(component.length).toBe(1);
  });

  it('renders error message', () => {
    const errorMessage = 'test error message';

    const component = setup({
      error: errorMessage,
    });

    expect(component.find('.ant-form-explain').text()).toBe(errorMessage);
  });

  it('renders disabled button when no email', () => {
    expect(component.find(ButtonSignIn).props().disabled).toBe(true);
  });

  it('renders disabled button when email error', () => {
    const errorMessage = 'email error message';

    const component = setup({
      errors: {
        email: errorMessage,
      },
    });

    expect(component.find(ButtonSignIn).props().disabled).toBe(true);
  });

  it('button onClick calls onSubmit', () => {
    component
      .find(ButtonSignIn)
      .props()
      .onClick();

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  describe('<FormInput/> control when Enter pressed', () => {
    const setupInputComponent = (email, emailError = null) => {
      const component = setup({
        formProps: {
          values: {
            email: email,
          },
          errors: {
            email: emailError,
          },
        },
      });

      return component.find(FormInput);
    };

    it('onSubmit called', () => {
      const inputComponent = setupInputComponent('email');

      inputComponent.props().onPressEnter({
        preventDefault: () => {},
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    it('onSubmit is not called if there is an email error', () => {
      const inputComponent = setupInputComponent('email', 'email error');

      inputComponent.props().onPressEnter({
        preventDefault: () => {},
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });

    it('onSubmit is not called if email is empty', () => {
      const inputComponent = setupInputComponent('');

      inputComponent.props().onPressEnter({
        preventDefault: () => {},
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });
  });
});
