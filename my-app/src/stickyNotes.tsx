import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constant"; // Import the dummyNotesList from the appropriate module
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { ClickCounter, ToggleLike, ToggleTheme, ToggleDelete } from "./hooksExercise"
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from './themeContext';

export const StickyNotes = () => {
    // your code from App.tsx
    const [likedList, setLikedListApp] = useState(dummyNotesList.filter((item) => item.like));
    function toggleLikedListApp() {
        setLikedListApp(notes.filter((item) => item.like));
    }

    const [notes, setNotes] = useState(dummyNotesList);
    const initialNote = {
        id: -1,
        title: "",
        content: "",
        label: Label.other,
        like: false
    };

    const [createNote, setCreateNote] = useState(initialNote);
    const createNoteHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("title: ", createNote.title);
        console.log("content: ", createNote.content);
        createNote.id = notes.length + 1;
        setNotes([createNote, ...notes]);
        setCreateNote(initialNote);
    };

    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (

        <div className='app-container' style={{
            background: theme.background,
            color: theme.foreground,
            padding: "20px",
        }}>
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            <form className="note-form" onSubmit={createNoteHandler}>
                <div>
                    <input
                        placeholder="Note Title"
                        onChange={(event) =>
                            setCreateNote({ ...createNote, title: event.target.value })}
                        required>
                    </input>
                </div>

                <div>
                    <textarea
                        onChange={(event) =>
                            setCreateNote({ ...createNote, content: event.target.value })}
                        required>
                    </textarea>
                </div>

                <div>
                    <select
                        onChange={(event) =>
                            setCreateNote({ ...createNote, label: event.target.value as Label })}
                        required>
                        <option value={Label.personal}>Personal</option>
                        <option value={Label.study}>Study</option>
                        <option value={Label.work}>Work</option>
                        <option value={Label.other}>Other</option>
                    </select>
                </div>

                <div><button type="submit">Create Note</button></div>

                <ul>
                    {likedList.map((note) => (
                        <li>{note.title}</li>
                    ))}
                </ul>
            </form>

            <div className="notes-grid">
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className="note-item"
                        style={{
                            background: theme.background,
                            color: theme.foreground,
                            padding: "20px",
                        }}
                    >
                        <div className="notes-header">
                            <ToggleLike note={note} toggleLikedListApp={toggleLikedListApp} />
                            <ToggleDelete setNotes={setNotes} notes={notes} note={note} toggleLikedListApp={toggleLikedListApp} />
                        </div>
                        <h2 contentEditable="true">  {note.title} </h2>
                        <p contentEditable="true"> {note.content} </p>
                        <p contentEditable="true" > {note.label} </p>
                    </div>
                ))}
            </div>
        </div>);

}

export default StickyNotes;

