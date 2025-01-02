"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState, useEffect } from "react";

export interface Recipe {
    image: string | StaticImport;
    title: string;
    content: string;
}

export interface Comment {
    id: number;
    author: string;
    content: string;
    createdAt: string;
}

export const recipes: Recipe[] = [
    {
        title: "Strawberry Shortcake",
        content: "Delicious pasta dish with eggs, cheese, and pancetta...",
        image: "/images/cake.jpg",
    },
    {
        title: "Salsa",
        content: "Flavorful Indian curry with tender chicken pieces...",
        image: "/images/salsa.jpg",
    },
    {
        title: "Beef Burger",
        content: "Quick and healthy vegetable stir-fry with a savory sauce...",
        image: "/images/burger.jpg",
    },
];

const useLocalStorage = (key: string, initialValue: Comment[]) => {
    const [storedValue, setStoredValue] = useState<Comment[]>(initialValue);

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item));
            }
        } catch (error) {
            console.log(error);
        }
    }, [key]);

    const setValue = (value: Comment[]) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue] as const;
};

export const useComments = (recipeTitle: string) => {
    return useLocalStorage(`comments-${recipeTitle}`, []);
};