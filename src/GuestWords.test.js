import React from 'react';
import { shallow } from 'enzyme';
import { findByTest, checkProps } from '../test/testUtils';
import GuestWords from './GuestWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}],
};

const setup = (props={}) => {
    const setupProp = {...defaultProps, ...props};
    return shallow(<GuestWords {...setupProp} />);
}

test('no warning with expected props', () => {
    checkProps(GuestWords, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    });
    test('renders without error', () => {
        const component = findByTest(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const instructions = findByTest(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe ('if there are words guessed', () => {

})