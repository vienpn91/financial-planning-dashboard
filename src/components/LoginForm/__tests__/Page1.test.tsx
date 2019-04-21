import { shallow } from 'enzyme';
import { FormikProps } from 'formik';

import Page1 from '../Page1';
import { ButtonSignIn } from '../styled';
import { FormInput } from '../../Elements';
import { LoginFormValues } from '../LoginForm';

const mockOnSubmit = jest.fn();

interface Page1Props {
  loading: boolean;
  error?: string;
  formProps: FormikProps<LoginFormValues>;
  onSubmit: () => void;
}

const setup = (props: Page1Props = {}, email = null, emailError = null) => {
  mockOnSubmit.mockClear();

  const setupProps: Page1Props = {
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

    it('onClick calls onSubmit', () => {
      component
        .find(ButtonSignIn)
        .props()
        .onClick();

      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('<FormInput/> control when Enter pressed', () => {
    it('onSubmit called', () => {
      const inputComponent = setup({}, 'email').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault: () => {},
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    it('onSubmit is not called if there is an email error', () => {
      const inputComponent = setup({}, 'email', 'email error').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault: () => {},
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });

    it('onSubmit is not called if email is empty', () => {
      const inputComponent = setup({}, '').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault: () => {},
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });
  });
});
