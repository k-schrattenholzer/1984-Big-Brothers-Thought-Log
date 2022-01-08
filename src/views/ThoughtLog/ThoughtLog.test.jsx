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

});

it('should edit a thought', () => {
  render(
  <ThoughtLog/>);

  const thought = screen.getByText(/I would like to cry near a lighthouse/i);
  const editBtn = screen.getByLabelText(/edit-btn-I would like to cry near a lighthouse/i);

  userEvent.click(editBtn);


  const inputArea = screen.getByLabelText(/edit-thought/i);
  const saveBtn = screen.getByText(/Submit for Review/i);

  userEvent.click(saveBtn);

  userEvent.type(inputArea, 'I could never figure out algebra');
  userEvent.click(editBtn);

  screen.findByText('I could never figure out algebra');
});

it('should delete a thought', () => {
  render(
  <ThoughtLog/>);

  const thought = screen.findByText(/I would like to cry near a lighthouse/i);
  const deleteBtn = screen.getByLabelText(/delete-0/i);

  userEvent.click(deleteBtn);

  expect(thought).toBeNull;
});