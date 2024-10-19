import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { dummyGroceryList } from "./constant";
import { cleanup } from "@testing-library/react";


afterEach(cleanup);
afterEach(() => {
    jest.clearAllMocks();
  });

test("reads all list items", () => {
  render(<ToDoList />);
  for (let i = 0; i < dummyGroceryList.length; i++) {
    const dummyGroceryTitle = screen.getByText(
      dummyGroceryList[i].name.toString()
    );
    expect(dummyGroceryTitle).toBeInTheDocument();
  }
})

test("check no list items", () => {
    render(<ToDoList />);
    const checkbox1 = screen.getAllByRole("checkbox");
    
      const numberChecked = screen.getByText(
        "Items bought: " + (0).toString()
      );
      expect(numberChecked).toBeInTheDocument();
    
  })




test("edgecase: check all list items", () => {
    render(<ToDoList />);
    const numberCheckedInit = screen.getByText(
        "Items bought: 0"
      );
    expect(numberCheckedInit).toBeInTheDocument();
     const checkbox = screen.getAllByRole("checkbox");
    for (let i = 0; i < checkbox.length; i++){
         fireEvent.click(checkbox[checkbox.length-i-1]);
       
    }
    
    const numberChecked = screen.getByText(
        "Items bought: " + (checkbox.length).toString()
     );
      expect(numberChecked).toBeInTheDocument();
    
  })



