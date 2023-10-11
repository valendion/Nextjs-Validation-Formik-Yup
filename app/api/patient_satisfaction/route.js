import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  const res = await prisma.patientSatisfaction.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
  });
  return NextResponse.json(res, { status: 200 });
};

export const POST = async (request) => {
  const body = await request.json();
  const patientSatisfaction = await prisma.patientSatisfaction.create({
    data: {
      name: body.name,
      patient_satisfaction: body.patient_satisfaction,
      advice: body.advice,
    },
  });
  return NextResponse.json(patientSatisfaction);
};
