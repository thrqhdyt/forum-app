/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/**
 *
 * scenario testing
 *
 * - ThreadInput component
 *  - should handle title typing correctly
 *  - should handle category(opsional) typing correctly
 *  - should handle body typing correctly
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import ThreadInput from "./ThreadInput";

describe('ThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    // arrange
    render(<ThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Title');

    // action
    await userEvent.type(titleInput, 'titletes');

    // assert
    expect(titleInput).toHaveValue('titletes');
  });

  it('should handle category(opsional) typing correctly', async () => {
    // arrange
    render(<ThreadInput addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Category (opsional)');

    // action
    await userEvent.type(categoryInput, 'categorytest');

    // assert
    expect(categoryInput).toHaveValue('categorytest');
  });

  it('should handle body typing correctly', async () => {
    // arrange
    render(<ThreadInput addThread={() => {}} />);
    const bodyInput = await screen.getByTestId('input-body');

    // action
    await userEvent.click(bodyInput);
    await userEvent.keyboard('bodytest');

    // assert
    expect(bodyInput.textContent).toBe('bodytest');
  });
});
