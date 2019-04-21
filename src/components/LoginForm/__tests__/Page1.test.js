import { shallow } from 'enzyme';

import Page1 from '../Page1';

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
});
