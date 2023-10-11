-- CreateTable
CREATE TABLE "PatientSatisfaction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "patient_satisfaction" TEXT NOT NULL,
    "advice" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PatientSatisfaction_pkey" PRIMARY KEY ("id")
);
