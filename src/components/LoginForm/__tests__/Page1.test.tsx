import { shallow } from 'enzyme';
import { FormikProps } from 'formik';

import Page1 from '../Page1';
import { ButtonSignIn } from '../styled';
import { FormInput } from '../../Elements';
import { LoginFormValues } from '../LoginForm';

const mockOnSubmit = jest.fn();

interface ComponentProps {
  loading?: boolean;
  error?: string;
  formProps?: FormikProps<LoginFormValues>;
  onSubmit?: () => void;
}

const setup = (props: ComponentProps = {}, email = null, emailError = null) => {
  mockOnSubmit.mockClear();

  const setupProps = {
    loading: false,
    error: null,
    formProps: {
      values: {
        email,
      },
      errors: {
        email: emailError,
      },
    },

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

    const wrapper = setup({
      error: errorMessage,
    });

    expect(wrapper.find('.ant-form-explain').text()).toBe(errorMessage);
  });

  describe('<ButtonSignIn/>', () => {
    it('is enabled when there is an email and no email error', () => {
      const wrapper = setup({}, 'email');

      expect(wrapper.find(ButtonSignIn).props().disabled).toBe(false);
    });

    it('is disabled when there is an email and an email error', () => {
      const wrapper = setup({}, 'email', 'email error message');

      expect(wrapper.find(ButtonSignIn).props().disabled).toBe(true);
    });

    it('is disabled when no email and no email error', () => {
      expect(component.find(ButtonSignIn).props().disabled).toBe(true);
    });

    it('is disabled when no email and an email error', () => {
      const wrapper = setup({}, null, 'email error message');

      expect(wrapper.find(ButtonSignIn).props().disabled).toBe(true);
    });

    it('is setting `loading` prop', () => {
      const wrapper = setup({
        loading: true,
      });

      expect(wrapper.find(ButtonSignIn).props().loading).toBe(true);
    });

    it('on onClick calls `onSubmit`', () => {
      component
        .find(ButtonSignIn)
        .props()
        .onClick();

      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('<FormInput/> when Enter pressed', () => {
    // tslint:disable-next-line:no-empty
    const preventDefault = () => {};

    it('calls `onSubmit` if there is an email and no email error', () => {
      const inputComponent = setup({}, 'email').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault,
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    it('does not call `onSubmit` if there is an email and an email error', () => {
      const inputComponent = setup({}, 'email', 'email error').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault,
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });

    it('does not call `onSubmit` if no email and no email error', () => {
      const inputComponent = component.find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault,
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });

    it('does not call `onSubmit` if no email and an email error', () => {
      const inputComponent = setup({}, null, 'email error').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault,
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });
  });
});
