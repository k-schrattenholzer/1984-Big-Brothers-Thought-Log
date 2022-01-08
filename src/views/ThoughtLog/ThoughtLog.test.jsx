import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import ThoughtLog from "./ThoughtLog.jsx";

it('should add a thought', () => {

  render(
  <ThoughtLog/>);

  const inputArea = screen.getByLabelText(/add-thought/i);
  const addBtn = screen.getByLabelText(/add-btn/i);

  userEvent.type(inputArea, 'I could never figure out algebra');
  userEvent.click(addBtn);

  screen.getByText('I could never figure out algebra');

})