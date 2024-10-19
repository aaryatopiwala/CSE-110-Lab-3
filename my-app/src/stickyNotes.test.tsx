import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
import { dummyNotesList } from "./constant";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });
});

test("reads all notes", () => {
  render(<StickyNotes />);
  for (let i = 1; i <= 6; i++) {
    const dummyNoteTitle = screen.getByText(
      "test note " + i.toString() +  " title"
    );
    const dummyNoteContent = screen.getByText(
      "test note " + i.toString() + " content"
    );
    expect(dummyNoteTitle).toBeInTheDocument();
    expect(dummyNoteContent).toBeInTheDocument();
  }
})

test("update note", () => {
  render(<StickyNotes />);
  const noteTitles:HTMLInputElement[] = screen.getAllByTestId('title') as HTMLInputElement[];
  const noteContents:HTMLInputElement[] = screen.getAllByTestId('content') as HTMLInputElement[];
  const noteLabels:HTMLInputElement[] = screen.getAllByTestId('label') as HTMLInputElement[];
  for (let i = 0; i < 6; i++) {
    fireEvent.input(noteTitles[i], { target: { textContent: "New Title" } });
    fireEvent.blur(noteTitles[i]);
    fireEvent.input(noteContents[i], { target: { textContent: "New Content" } });
    fireEvent.blur(noteContents[i]);
    fireEvent.input(noteLabels[i], { target: { textContent: "New Label" } });
    fireEvent.blur(noteLabels[i]);
    expect(noteTitles[i].textContent).toBe("New Title");
    expect(noteContents[i].textContent).toBe("New Content");
    expect(noteLabels[i].textContent).toBe("New Label");
  }
})

test("delete one note", () => {
  render(<StickyNotes />);
  const deleteButton = screen.getAllByText("x");
  for (let i = 0; i < 1; i++) {
    fireEvent.click(deleteButton[i]);
    expect(deleteButton[i]).not.toBeInTheDocument();
  }
  
  const numNotes = screen.getAllByText("x");
  expect(numNotes.length).toEqual(5);
})


test("edgecase: delete all notes", () => {
  render(<StickyNotes />);
  const deleteButton = screen.getAllByText("x");
  for (let i = 0; i < deleteButton.length; i++) {
    fireEvent.click(deleteButton[i]);
    expect(deleteButton[i]).not.toBeInTheDocument();
  }
  
  const numNotes = screen.queryByText("x");
  expect(numNotes).toEqual(null);
})