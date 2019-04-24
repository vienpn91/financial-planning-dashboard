import { shallow } from 'enzyme';
import { FormikProps } from 'formik';

import Page2 from '../Page2';
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

const setup = (props: ComponentProps = {}, password = null, passwordError = null) => {
  mockOnSubmit.mockClear();

  const setupProps = {
    loading: false,
    error: null,
    formProps: {
      values: {
        password,
      },
      errors: {
        password: passwordError,
      },
    },

    onSubmit: mockOnSubmit,

    ...props,
  };

  return shallow(<Page2 {...setupProps} />);
};

describe('<Page2/>', () => {
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

  it('has password input control of type `password`', () => {
    const inputComponent = component.find(FormInput);

    expect(inputComponent.props().type).toBe('password');
  });

  describe('<ButtonSignIn/>', () => {
    it('is enabled when there is an password and no password error', () => {
      const wrapper = setup({}, 'password');

      expect(wrapper.find(ButtonSignIn).props().disabled).toBe(false);
    });

    it('is disabled when there is an password and an password error', () => {
      const wrapper = setup({}, 'password', 'error message');

      expect(wrapper.find(ButtonSignIn).props().disabled).toBe(true);
    });

    it('is disabled when no password and no password error', () => {
      expect(component.find(ButtonSignIn).props().disabled).toBe(true);
    });

    it('is disabled when no password and an password error', () => {
      const wrapper = setup({}, null, 'error message');

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

    it('calls `onSubmit` if there is an password and no password error', () => {
      const inputComponent = setup({}, 'password').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault,
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    it('does not call `onSubmit` if there is an password and an password error', () => {
      const inputComponent = setup({}, 'password', 'password error').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault,
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });

    it('does not call `onSubmit` if no password and no password error', () => {
      const inputComponent = component.find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault,
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });

    it('does not call `onSubmit` if no password and an password error', () => {
      const inputComponent = setup({}, null, 'password error').find(FormInput);

      inputComponent.props().onPressEnter({
        preventDefault,
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    });
  });
});
