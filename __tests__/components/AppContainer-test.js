import React from 'react';
import { mount, render, shallow } from 'enzyme';

import AppContainer from '../../src/js/components/AppContainer';

describe('A sample test', () => {
    it('should be selectable by class "app"', () => {
       expect(shallow(<AppContainer />).is('.app')).toBe(true);
    });

    it('should call component method when clicked', () => {
        const spy = jest.spyOn(AppContainer.prototype, 'testClick');
        const app = mount(<AppContainer />);

        app.simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('should render to static HTML', function() {
        expect(render(<AppContainer />).text()).toEqual('Hello, App');
    });
});