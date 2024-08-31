"use client";
import { FormEventHandler, useEffect, useState } from "react";
import { toast } from "sonner";

import { useRenameModal } from "@/store/use-rename-modal";
import { api } from "@/convex/_generated/api";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const RenameModal = () => {
    const { mutate, pending } = useApiMutation(api.board.update);
    const { isOpen, onClose, initialValues } = useRenameModal();
    const [title, setTitle] = useState(initialValues.title);

    useEffect(() => {
        setTitle(initialValues.title);
    }, [initialValues.title]);

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        mutate({
            id: initialValues.id,
            title,
        })
            .then(() => {
                toast.success("Board title renamed");
                onClose();
            })
            .catch(() => {
                toast.error("Board title rename failed");
            });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit board title</DialogTitle>
                </DialogHeader>

                <DialogDescription>
                    Enter a new title for this board
                </DialogDescription>

                <form onSubmit={onSubmit} className="space-y-4">
                    <Input
                        disabled={pending}
                        required
                        maxLength={60}
                        placeholder="Board title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>

                        <Button disabled={pending} type="submit">
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
