"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface ICanvasProps {
    boardId: string;
}

export const Canvas = ({ boardId }: ICanvasProps) => {
    return (
        <main className="w-full h-full relative bg-neutral-100 touch-none">
            <Info />
            <Participants />
            <Toolbar />
        </main>
    );
};
