/*
  Warnings:

  - You are about to drop the column `nameId` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `spritesId` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `statsId` on the `Pokemon` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pokemonId]` on the table `Name` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,pokemonId]` on the table `Resistance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pokemonId]` on the table `Sprites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pokemonId]` on the table `Stats` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Talent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pokemonId` to the `Name` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pokemonId` to the `Sprites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pokemonId` to the `Stats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_nameId_fkey";

-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_spritesId_fkey";

-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_statsId_fkey";

-- DropIndex
DROP INDEX "Pokemon_nameId_key";

-- DropIndex
DROP INDEX "Pokemon_spritesId_key";

-- DropIndex
DROP INDEX "Pokemon_statsId_key";

-- AlterTable
ALTER TABLE "Name" ADD COLUMN     "pokemonId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "nameId",
DROP COLUMN "spritesId",
DROP COLUMN "statsId",
ADD COLUMN     "catch_rate" INTEGER,
ADD COLUMN     "egg_groups" TEXT[],
ADD COLUMN     "evolution" JSONB,
ADD COLUMN     "formes" TEXT,
ADD COLUMN     "height" TEXT,
ADD COLUMN     "level_100" INTEGER,
ADD COLUMN     "sexe" JSONB,
ADD COLUMN     "weight" TEXT;

-- AlterTable
ALTER TABLE "Sprites" ADD COLUMN     "pokemonId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Stats" ADD COLUMN     "pokemonId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Name_pokemonId_key" ON "Name"("pokemonId");

-- CreateIndex
CREATE UNIQUE INDEX "Resistance_name_pokemonId_key" ON "Resistance"("name", "pokemonId");

-- CreateIndex
CREATE UNIQUE INDEX "Sprites_pokemonId_key" ON "Sprites"("pokemonId");

-- CreateIndex
CREATE UNIQUE INDEX "Stats_pokemonId_key" ON "Stats"("pokemonId");

-- CreateIndex
CREATE UNIQUE INDEX "Talent_name_key" ON "Talent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- AddForeignKey
ALTER TABLE "Name" ADD CONSTRAINT "Name_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sprites" ADD CONSTRAINT "Sprites_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
