/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/**
 *
 * scenario testing
 *
 * - LoginInput component
 *  - should handle name typing correctly
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should call register function when register button is clicked
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import RegisterInput from "./RegisterInput";

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');

    // action
    await userEvent.type(nameInput, 'john');

    // assert
    expect(nameInput).toHaveValue('john');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(emailInput, 'john@email.com');

    // assert
    expect(emailInput).toHaveValue('john@email.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, 'qwerty123');

    // assert
    expect(passwordInput).toHaveValue('qwerty123');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'john');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'john@email.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'qwerty123');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'john',
      email: 'john@email.com',
      password: 'qwerty123',
    });
  });
});
