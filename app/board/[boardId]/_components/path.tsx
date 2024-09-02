import { getStroke } from "perfect-freehand";

import { getSvgPathFromStroke } from "@/lib/utils";

interface IPathProps {
    x: number;
    y: number;
    points: number[][];
    fill: string;
    onPointerDown?: (e: React.PointerEvent) => void;
    stroke?: string;
}

export const Path = ({
    x,
    y,
    points,
    fill,
    onPointerDown,
    stroke,
}: IPathProps) => {
    const path = points.map(([x, y]) => `${x} ${y}`).join(" ");

    return (
        <path
            className="drop-shadow-md"
            d={getSvgPathFromStroke(
                getStroke(points, {
                    size: 16,
                    thinning: 0.5,
                    smoothing: 0.5,
                    streamline: 0.5,
                })
            )}
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}
            x={0}
            y={0}
            fill={fill}
            onPointerDown={onPointerDown}
            stroke={stroke}
            strokeWidth={1}
        />
    );
};
