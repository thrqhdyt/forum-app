/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/**
 *
 * scenario testing
 *
 * - LoginInput component
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should call login function when login button is clicked
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import LoginInput from "./LoginInput";

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(emailInput, 'emailtest@email.com');

    // assert
    expect(emailInput).toHaveValue('emailtest@email.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, 'qwerty123');

    // assert
    expect(passwordInput).toHaveValue('qwerty123');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest@email.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'qwerty123');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest@email.com',
      password: 'qwerty123',
    });
  });
});
