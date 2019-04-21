import { shallow } from 'enzyme';

import Page1 from '../Page1';
import { ButtonSignIn } from '../styled';
import { FormInput } from '../../Elements';

const mockOnSubmit = jest.fn();

const defaultProps = {
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
    let inputComponent = null;
    beforeEach(() => {
      const component = setup({
        formProps: {
          values: {
            email: 'email',
          },
          errors: {},
        },
      });

      inputComponent = component.find(FormInput);
    });

    it('onSubmit called', () => {
      inputComponent.props().onPressEnter({
        preventDefault: () => {},
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
