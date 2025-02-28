import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import logo from '../../assets/images/logo.svg'
import Logo from '../../components/Logo'

describe('Logo', () => {
    it('should display logo image', () => {
        render(<Logo img={logo} alt='Logo' />)

        const img = screen.getByAltText('Logo')
        expect(img).toBeTruthy()
        expect(img.getAttribute('src')).toBe(logo)
        expect(img.getAttribute('alt')).toBe('Logo')
    })
})