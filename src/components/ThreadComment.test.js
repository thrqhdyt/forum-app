/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/**
 *
 * scenario testing
 *
 * - ThreadComment component
 *  - should handle content typing correctly
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import ThreadComment from "./ThreadComment";

describe('ThreadComment component', () => {
  it('should handle content typing correctly', async () => {
    // arrange
    render(<ThreadComment addComment={() => {}} />);
    const inputContent = await screen.getByTestId('input-content');

    // action
    await userEvent.click(inputContent);
    await userEvent.keyboard('contenttest');

    // assert
    expect(inputContent.textContent).toBe('contenttest');
  });
});
