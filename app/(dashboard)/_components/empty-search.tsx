import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src="/empty-search.svg" alt="Empty Org" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">No search results</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};
