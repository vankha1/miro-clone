import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface IActionsProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
}

export const Actions = ({
    children,
    side = "right",
    sideOffset = 8,
    id,
    title,
}: IActionsProps) => {
    const { onOpen } = useRenameModal();
    const { mutate, pending } = useApiMutation(api.board.remove);
    const handleCopyLink = () => {
        navigator.clipboard
            .writeText(`${window.location.origin}/board/${id}`)
            .then(() => toast.success("Link copied"))
            .catch(() => toast.error("Fails to copy link"));
    };

    const handleDeleteBoard = () => {
        mutate({ id })
            .then(() => toast.success("Board deleted"))
            .catch(() => toast.error("Fails to delete"));
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

            <DropdownMenuContent
                side={side}
                sideOffset={sideOffset}
                className="w-60"
                onClick={(e) => e.stopPropagation()}
            >
                <DropdownMenuItem
                    className="p-3 cursor-pointer"
                    onClick={handleCopyLink}
                >
                    <Link2 className="h-4 w-4 mr-2" />
                    Copy board link
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="p-3 cursor-pointer"
                    onClick={() => onOpen(id, title)}
                >
                    <Pencil className="h-4 w-4 mr-2" />
                    Rename
                </DropdownMenuItem>

                <ConfirmModal
                    header="Delete board?"
                    description="This will delete the board and all its contents"
                    disabled={pending}
                    onConfirm={handleDeleteBoard}
                >
                    <Button
                        variant="ghost"
                        className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
                    >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                    </Button>
                </ConfirmModal>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
