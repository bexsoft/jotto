import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
    test('Returns an action with correct CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    });
});