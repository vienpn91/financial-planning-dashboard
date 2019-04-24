import { shallow } from 'enzyme';
import { FormikProps } from 'formik';

import Page3 from '../Page3';
import LoginVerify from '../../LoginVerify/LoginVerify';
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

  const setupProps = {
    loading: false,
    message: undefined,
    error: undefined,
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

  describe('<LoginVerify/>', () => {
    it('sets `loading`', () => {
      const wrapper = setup({
        loading: true,
      });

      expect(wrapper.find(LoginVerify).props().loading).toBe(true);
    });

    it('sets `error`', () => {
      const errorMessage = 'error message';

      const wrapper = setup({
        error: errorMessage,
      });

      expect(wrapper.find(LoginVerify).props().error).toBe(errorMessage);
    });

    it('sets `formProps`', () => {
      const formProps = {
        email: 'email',
        password: 'password',
      };

      const wrapper = setup({
        formProps,
      });

      expect(wrapper.find(LoginVerify).props().formProps).toBe(formProps);
    });

    it('sets `message`', () => {
      const message = 'message';

      const wrapper = setup({
        message,
      });

      expect(wrapper.find(LoginVerify).props().message).toBe(message);
    });

    it('sets `onSubmit`', () => {
      expect(component.find(LoginVerify).props().onSubmit).toBe(mockOnSubmit);
    });
  });
});
