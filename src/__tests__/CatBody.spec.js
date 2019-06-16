import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CatBody from '../components/CatBody';

afterEach(cleanup);

test('renders the CatBody body text', () => {
    const text = `^__^`;
    const {getByText} = render(<CatBody bodyText={text}/>)
    expect(getByText(text)).toBeTruthy();
})