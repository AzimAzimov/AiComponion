import SearchInput from "@/components/Search";
import prismadb from "@/lib/prismadb";
import React, { FC } from "react";
import Categories from "@/components/Categories";
import Companions from "@/components/Companions";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage: FC<RootPageProps> = async ({ searchParams }) => {
  const categories = await prismadb.category.findMany();
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
      <Companions data={data} />
    </div>
  );
};

export default RootPage;
