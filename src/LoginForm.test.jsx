import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import LoginForm from "./Components/LoginForm"


describe('Testing LoginForm', () => {
    test('should render title', () => {
        render(<LoginForm/>)
        const title = screen.getByText(/debe loguearse antes de continuar:/i)
        expect(title).toBeDefined()
    })
    test('should render first input', () => {
        render(<LoginForm/>)
        const input = screen.getByRole('email')
        expect(input).toBeDefined()
    })
    test('second input should change', () => {
        render(<LoginForm/>)
        const input = screen.getByTestId('password')
        fireEvent.change(input, {target: {value: 'contraseña123'}})
        expect(input.value).toBe('contraseña123')
    })
    test('should call button event', () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const button = screen.getByText('Enviar')
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
})