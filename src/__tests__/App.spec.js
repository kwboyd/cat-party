import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../components/App';
import 'jest-dom/extend-expect'

afterEach(cleanup);

test('renders the Rules header', () => {
    const {getByText} = render(<App />)
    expect(getByText(/Cat Party/)).toBeTruthy();
})

test('always generates at least one male and female cat at the start', () => {
    const {getAllByText} = render(<App />)
    expect(getAllByText(/(M)/)).toBeTruthy();
    expect(getAllByText(/(F)/)).toBeTruthy();
})

test('generate random cat button generates a new cat', () => {
    const {getAllByTestId, getByText} = render(<App />);
    const numberOfCats = getAllByTestId('cat-box').length;
    fireEvent.click(getByText('Generate Random Cat'));

    const newNumberOfCats = getAllByTestId('cat-box').length;
    expect(newNumberOfCats).toEqual(numberOfCats + 1);
})

test('selecting a male cat disables all other male cats', () => {
    const {getAllByTestId, getByText} = render(<App />);

    while (getAllByTestId('m-button').length < 2) {
        // ensure that we have at least two male cats
        fireEvent.click(getByText('Generate Random Cat'));
    }

    const firstMaleButton = getAllByTestId('m-button')[0];
    fireEvent.click(firstMaleButton);

    const secondMaleButton = getAllByTestId('m-button')[1];
    expect(secondMaleButton).toBeDisabled()

    const femaleButton = getAllByTestId('f-button')[0];
    expect(femaleButton).toBeEnabled();
})

test('selecting and then deselecting a female cat reenables all cat buttons', () => {
    const {getAllByTestId, getByText} = render(<App />);

    while (getAllByTestId('f-button').length < 2) {
        // ensure that we have at least two female cats
        fireEvent.click(getByText('Generate Random Cat'));
    }

    const firstFemaleButton = getAllByTestId('f-button')[0];
    fireEvent.click(firstFemaleButton);
    
    const deselectButton = getByText('Deselect');
    fireEvent.click(deselectButton);

    const secondFemaleButton = getAllByTestId('f-button')[1];
    expect(secondFemaleButton).toBeEnabled()

    const maleButton = getAllByTestId('m-button')[0];
    expect(maleButton).toBeEnabled();
})

test('selecting a male cat and a female cat creates a new cat', () => {
    const {getAllByTestId} = render(<App />);

    const numberOfCats = getAllByTestId('cat-box').length;
    const maleButton = getAllByTestId('m-button')[0];
    const femaleButton = getAllByTestId('f-button')[0];
    fireEvent.click(maleButton);
    fireEvent.click(femaleButton);

    const newNumberOfCats = getAllByTestId('cat-box').length;
    expect(newNumberOfCats).toEqual(numberOfCats + 1);
})