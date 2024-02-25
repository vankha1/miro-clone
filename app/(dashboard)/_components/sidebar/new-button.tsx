"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";  

import {
    Dialog,
    DialogContent,
    DialogTrigger 
} from '@/components/ui/dialog'
import { Hint } from "@/components/hint";

// Create a button to display dialog
export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square relative">
                    <Hint
                        label="Create organization"
                        side="right"
                        sideOffset={18}
                    >
                        <button className="bg-white/25 w-full h-full rounded-md flex justify-center items-center opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white"/>
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-0 max-w-[480px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}