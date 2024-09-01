"use client";

import { memo } from "react";

import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@liveblocks/react/suspense";
import { MousePointer2 } from "lucide-react";

interface CursorProps {
    connectionId: number;
}

export const Cursor = memo(({
    connectionId,
}: CursorProps) => {
    
    const info = useOther(connectionId, (user) => user?.info);

    const cursor = useOther(connectionId, (user) => user.presence.cursor);

    const name = info?.name || "Teammate";

    if (!cursor) {
        return null
    }

    const { x, y } = cursor;

    return (
        // In order to render icons, text, or other HTML elements inside an SVG element, you can use the <foreignObject> element.
        <foreignObject
            style={{
                transform: `translateX(${x}px) translateY(${y}px)`,
            }}
            height={50}
            width={50}
            className="relative drop-shadow-md"
        >
            <MousePointer2
                className="h-5 w-5"
                style={{
                    fill: connectionIdToColor(connectionId),
                    color: connectionIdToColor(connectionId),
                }}
            />
        </foreignObject>
    );
});
