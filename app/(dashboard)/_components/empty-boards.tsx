"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const handleCreateBoard = () => {
    if (!organization) return;

    mutate({
      title: "New board",
      orgId: organization.id,
    })
      .then((id) => {
        toast.success("Board created successfully");
        // TODO: redirect to board_id
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
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
        <Button disabled={pending} onClick={handleCreateBoard} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
