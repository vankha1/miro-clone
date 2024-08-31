import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface INewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: INewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const handleCreateBoard = () => {
    mutate({
      orgId,
      title: "New board",
    })
      .then((id) => {
        toast.success("Board created");
        // TODO: redirect to board_id
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };
  return (
    <button
      onClick={handleCreateBoard}
      disabled={disabled}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg flex flex-col justify-center items-center py-6 hover:bg-blue-800",
        (pending || disabled) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div className="" />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};
