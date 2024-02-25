// https://ui.shadcn.com/docs/components/tooltip

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    alignOffset?: number;
}

export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                {/* asChild prop is used to make sure that styles are not broken and not hydration errors */}
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>

                <TooltipContent
                    className="text-white bg-blue-950 border-none"
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alignOffset}
                >
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
