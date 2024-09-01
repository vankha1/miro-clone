"use client";

import { useSelf } from "@liveblocks/react/suspense";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface ICanvasProps {
    boardId: string;
}

export const Canvas = ({ boardId }: ICanvasProps) => {
    const { name, picture } = useSelf((me) => me.info);
    
    return (
        <main className="w-full h-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId} />
            <Participants />
            <Toolbar />
        </main>
    );
};
