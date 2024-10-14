import { Label } from "./types";
import React from 'react';


export const dummyNotesList = [
    {
        id: 1,
        title: "test note 1 title",
        content: "test note 1 content",
        label: Label.other,
        like: false
    },
    {
        id: 2,
        title: "test note 2 title",
        content: "test note 2 content",
        label: Label.personal,
        like: false
    },
    {
        id: 3,
        title: "test note 3 title",
        content: "test note 3 content",
        label: Label.work,
        like: false

    },
    {
        id: 4,
        title: "test note 4 title",
        content: "test note 4 content",
        label: Label.study,
        like: false

    },
    {
        id: 5,
        title: "test note 5 title",
        content: "test note 5 content",
        label: Label.study,
        like: false

    },
    {
        id: 6,
        title: "test note 6 title",
        content: "test note 6 content",
        label: Label.personal,
        like: false

    },
 ]

 export const dummyGroceryList = [
    { name: "Apples", isPurchased: false },
    { name: "Bananas", isPurchased: false },
 ]