import React from "react";
import CompanionForm from "./components/CompanionForm";

interface CompanionIdPage {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPage) => {
  const companion = await prisma?.componion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const categories = await prisma?.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
