import React from "react";
import CompanionForm from "./components/CompanionForm";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CompanionIdPage {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPage) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prisma?.companion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const categories = await prisma?.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
