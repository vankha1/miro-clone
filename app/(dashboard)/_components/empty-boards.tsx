"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);

  const handleCreateBoard = () => {
    if (!organization) return;

    create({
      title: "New board",
      orgId: organization.id,
    });
  };
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src="/note.svg" alt="Empty Org" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>

      <div className="mt-6">
        <Button onClick={handleCreateBoard} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
