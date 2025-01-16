/*
  Warnings:

  - The `gmax` column on the `Sprites` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Sprites" DROP COLUMN "gmax",
ADD COLUMN     "gmax" JSONB;
