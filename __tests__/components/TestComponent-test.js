import React from 'react';
import { mount, render, shallow } from 'enzyme';

import TestComponent from '../../src/js/components/TestComponent';

describe('A sample test', () => {
  it('should be selectable by class "test-component"', () => {
   expect(shallow(<TestComponent />).is('.test-component')).toBe(true);
  });

  it('should have displayText=\"2nd state\" after component mounts', () => {
    const stateChange = jest.spyOn(TestComponent.prototype, 'changeDisplayText');
    const wrapper = mount(<TestComponent />);

    expect(stateChange).toHaveBeenCalled();
  });
});