import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { findByTest, checkProps } from '../test/testUtils';

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
};

test('renders without error', () => {
    const wrapper = setup({success: true});
    const component = findByTest(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});
test('renders no text when success is false', () => {
    const wrapper = setup({success: false});
    const component = findByTest(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});
test('renders non-empty congrats when success is true', () => {
    const wrapper = setup({success: true});
    const message = findByTest(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});
test('No error with expected props', () => {
    const expectedProps = { success: true };
    checkProps(Congrats, expectedProps);
});