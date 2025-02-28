import { render, screen } from '@testing-library/react'
import dollarIcon from '../../assets/images/icon-dollar.svg'
import { describe, it, expect } from 'vitest'
import MainInput from '../../components/MainInput'

describe('MainInput', () => {
    it('should display label when label prop is provided', () => {
        render(<MainInput label='Bill' />)

        const label = screen.getByText(/bill/i)
        expect(label).toBeTruthy()
    })

    it('should display label when label prop is provided', () => {
        render(<MainInput label='Number of people' />)

        const label = screen.getByText(/number of people/i)
        expect(label).toBeTruthy()
    })

    it('should display error message when error prop is provided', () => {
        const errorMessage = "Can't be Zero"
        render(<MainInput error={errorMessage} />)

        const error = screen.getByText(errorMessage)
        expect(error).toBeTruthy()
    })

    it('should display error message when error prop is provided', () => {
        const errorMessage = ""
        render(<MainInput error={errorMessage} />)

        const error = screen.queryAllByRole(errorMessage)
        expect(error).toBeTruthy()
    })

    it('should display image when prop is provided', () => {
        render(<MainInput img={dollarIcon} alt='dollar sign' />)

        const img = screen.getByAltText('dollar sign')
        expect(img).toBeTruthy()
        expect(img.getAttribute('src')).toBe(dollarIcon)
        expect(img.getAttribute('alt')).toBe('dollar sign')
    })
})