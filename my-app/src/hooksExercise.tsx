import React, { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { ThemeContext, themes } from "./themeContext";
import { title } from 'process';
import { dummyNotesList } from "./constant";
import "./App"
import { Label } from './types';
// Wrapper component to provide context


export function ClickCounter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    const theme = useContext(ThemeContext);
    // console.log("Clicker theme: ", theme)
    return (
    <div
        style={{
        background: theme.background,
        color: theme.foreground,
        padding: "20px",
        }}
    >
        <p>You clicked {count} times </p>
        <button
            onClick={() => setCount(count + 1)}
            style={{ background: theme.foreground, color: theme.background }}
        >
            Click me
        </button>
    </div>
    );
    }

export function ToggleTheme(props: {theme: { foreground: string; background: string; }, toggleTheme: () => void}) {
    return (
        <ThemeContext.Provider value={props.theme}>
        <button onClick={() => {
            props.toggleTheme();
            // console.log("New Theme")
            // console.log(props.theme)
        }}> Toggle Theme </button>
        <ClickCounter/>
        </ThemeContext.Provider>
    );
}


export function ToggleLike(props: {note: any, toggleLikedListApp:any }) {
    const [like, setLike] = useState(false);
    
    function toggleLike() {
        if (like) {
            props.note.like = false;
            setLike(false);
        } else {
            props.note.like = true;
            setLike(true);
        }
    }
    
    return (
      
        <div>
            <button  onClick={() => {
                toggleLike();
                props.toggleLikedListApp();
            }}>{like ? <p>❤️</p> : <p>🤍</p>}</button>
        </div>
      
    )
}

export function ToggleDelete(props: {setNotes: any, notes: any, note: any, toggleLikedListApp:any }) {
  const [deleteNote, setDelete] = useState(false);
  
  function toggleDelete() {
      setDelete(true);
      props.note.like = false;
      
  }
  
  return (
    
      <div>
          <button  onClick={() => {
        toggleDelete();
        props.toggleLikedListApp();
        props.setNotes(props.notes.filter((noteIter: any) => noteIter !== props.note));
      }}>x</button>
      </div>
    
  )
}

