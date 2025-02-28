import { render, screen } from '@testing-library/react'
import { expect,describe,it } from 'vitest'
import Total from '../../components/Total'

describe('Total', () => {
    it('should display heading if prop is provided', () => {
        render(<Total name='Total' />)

        const heading = screen.getByText(/total/i);
       expect(heading).toBeTruthy();
    })
    it('should display heading if prop is provided', () => {
        render(<Total name='Tip Amount' />)

        const heading = screen.getByText(/tip amount/i);
       expect(heading).toBeTruthy();
    })
    it('should display subname when prop is provided', () => {
        render (<Total subname='/ person' />)

        const subName = screen.getByText(/person/i)
        expect(subName).toBeTruthy();
    })
    it('should display image when prop is provided', () => {
        render(<Total alt='dollar sign' />)

        const img = screen.getByAltText(/dollar sign/i)
        expect(img).toBeTruthy()
    })
})