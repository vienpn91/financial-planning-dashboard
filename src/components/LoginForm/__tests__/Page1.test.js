import { shallow } from 'enzyme';

import Page1 from '../Page1';
import { ButtonSignIn } from '../styled';

const defaultProps = {
  loading: false,
  error: null,
  formProps: {
    values: {},
    errors: {},
  },
  onSubmit: () => {},
};

const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
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
});
