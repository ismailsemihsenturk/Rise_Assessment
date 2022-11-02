import { render, screen, fireEvent } from '@testing-library/react';
import App from "./App.js"

describe("Job", () => {

  it('job adding test', async () => {
    render(
      <App />
    );

    const inputElement = screen.getByTestId("input-job-name");
    const selectElement = screen.getByTestId("input-job-priority");
    const buttonElement = screen.getByTestId("button-job-create");
    fireEvent.change(inputElement, { target: { value: "testing the validation" } });
    fireEvent.change(selectElement, { target: { value: "Urgent" } });
    fireEvent.click(buttonElement);
    const JobElement = screen.getByText("testing the validation");
    expect(JobElement).toBeInTheDocument();


  });

  it('job filter test', () => {
    render(
      <App />
    );
    const inputElement = screen.getByTestId("filter-job-name");
    fireEvent.change(inputElement, { target: { value: "testing the filtering" } });
    const filterElement = screen.getByText("testing the filtering");
    expect(filterElement).toBeInTheDocument();
  });
});