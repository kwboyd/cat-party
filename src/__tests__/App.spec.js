import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../components/App';

afterEach(cleanup);

test('renders the Rules header', () => {
    const {getByText} = render(<App />)
    expect(getByText(/Cat Party/)).toBeTruthy();
})

test('always generates at least one male and female cat at the start', () => {
    const {queryAllByText} = render(<App />)
    expect(queryAllByText(/(M)/)).toBeTruthy();
    expect(queryAllByText(/(F)/)).toBeTruthy();
})

test('generate random cat button generates a new cat', () => {
    const {queryAllByTestId, getByText} = render(<App />);
    const numberOfCats = queryAllByTestId('cat-box').length;
    fireEvent.click(getByText('Generate Random Cat'));
    const newNumberOfCats = queryAllByTestId('cat-box').length;
    expect(newNumberOfCats).toEqual(numberOfCats + 1);
})