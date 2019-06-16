import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Rules from '../components/Rules';

afterEach(cleanup);

test('renders the Rules header', () => {
    const {getByText} = render(<Rules />)
    expect(getByText('Cat Party', {exact: false})).toBeTruthy();
})