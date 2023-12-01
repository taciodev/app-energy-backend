-- CreateTable
CREATE TABLE "electronic_devices" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "powerConsumption" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "electronic_devices_pkey" PRIMARY KEY ("id")
);
