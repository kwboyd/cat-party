import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CatBox from '../components/CatBox';
import generateRandomCat from '../services/randomCatGenerator';
import 'jest-dom/extend-expect'

afterEach(cleanup);

const validProps = {
    cat: generateRandomCat(),
    deselectCat: jest.fn(),
    catIsSelected: false,
    selectToBreed: jest.fn(),
    disableBreeding: false
}

test('renders the Cat name', () => {
    const {getByText} = render(<CatBox {...validProps} />)
    expect(getByText(new RegExp(validProps.cat.name))).toBeTruthy();
})

test('renders the Cat sex as (M) if male', () => {
    const maleCat = {...validProps.cat};
    maleCat.male = true;
    const {getByText} = render(<CatBox {...validProps} cat={maleCat} />)
    expect(getByText(/(M)/)).toBeTruthy();
})

test('renders the Cat sex as (F) if female', () => {
    const femaleCat = {...validProps.cat};
    femaleCat.male = false;
    const {getByText} = render(<CatBox {...validProps} cat={femaleCat} />)
    expect(getByText(/(F)/)).toBeTruthy();
})

test('renders the Cat body', () => {
    const {getByTestId} = render(<CatBox {...validProps} />);
    expect(getByTestId('cat-body')).toBeTruthy();
})

describe('cat is selected', () => {
    test('renders with selected-cat class', () => {
        const {getByTestId} = render(<CatBox {...validProps} catIsSelected={true} />);
        expect(getByTestId('cat-box')).toHaveClass('selected-cat');
    })

    test('renders the deselect cat button', () => {
        const {getByText} = render(<CatBox {...validProps} catIsSelected={true} />);
        expect(getByText('Deselect')).toBeTruthy();
    })

    test('clicking the deselect cat button calls the deselectCat prop', () => {
        const {getByText} = render(<CatBox {...validProps} catIsSelected={true} />);
        const button = getByText('Deselect');
        fireEvent.click(button);
        expect(validProps.deselectCat).toHaveBeenCalled();
    })
})

describe('cat is not selected', () => {
    test('renders without selected-cat class', () => {
        const {getByTestId} = render(<CatBox {...validProps} catIsSelected={false} />);
        expect(getByTestId('cat-box')).not.toHaveClass('selected-cat');
    })

    test('renders the Breed button', () => {
        const {getByText} = render(<CatBox {...validProps} catIsSelected={false} />);
        expect(getByText('Breed')).toBeTruthy();
    })

    test('clicking the breed button calls the selectToBreed prop function', () => {
        const {getByText} = render(<CatBox {...validProps} catIsSelected={false} />);
        const button = getByText('Breed');
        fireEvent.click(button);
        expect(validProps.selectToBreed).toHaveBeenCalled();
    })

    test('breed button is disabled if disableBreeding prop is true', () => {
        const {getByText} = render(<CatBox {...validProps} catIsSelected={false} disableBreeding={true} />);
        expect(getByText('Breed')).toBeDisabled()
    })

    test('breed button is enabled if disableBreeding prop is false', () => {
        const {getByText} = render(<CatBox {...validProps} catIsSelected={false} disableBreeding={false} />);
        expect(getByText('Breed')).toBeEnabled();
    })
})

describe('show genes', () => {
    test('clicking the show genes button displays the genes', () => {
        const {getByText, getByTestId} = render(<CatBox {...validProps} />);
        const button = getByText('Show Genes');
        fireEvent.click(button);
        expect(getByTestId('gene-makeup')).toBeTruthy();
    })

    test('clicking the show genes button twice hides the genes', () => {
        const {getByText, queryByTestId} = render(<CatBox {...validProps} />);
        const showButton = getByText('Show Genes');
        fireEvent.click(showButton);
        const hideButton = getByText('Hide Genes');
        fireEvent.click(hideButton);
        expect(queryByTestId('gene-makeup')).toBeNull();
    })
})
