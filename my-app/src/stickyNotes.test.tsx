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

})

test("delete note", () => {
  render(<StickyNotes />);
  const deleteButton = screen.getByText("x");
  fireEvent.click(deleteButton);
  expect(deleteButton).not.toBeInTheDocument();
  const numNotes = screen.queryByText("x");
  expect(numNotes).toHaveLength(5);
})