"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";
// https://clerk.com/docs/references/react/use-organization-list#use-organization-list
export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true, // If true, the new downloaded data will be appended to the list with the existing data. Defaults to false.
    },
  });
  // userMemberships.data: An array that contains the fetched data.
  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => {
        return (
            <Item 
                key={mem.organization.id}
                id={mem.organization.id}
                name={mem.organization.name}
                imageUrl={mem.organization.imageUrl}
            />
        )
      })}
    </ul>
  );
};
