/*
  Warnings:

  - You are about to drop the column `atk` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `atk_spe` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `def` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `def_spe` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `hp` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[pokedex_id]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameId]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[spritesId]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[statsId]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generation` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameId` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pokedex_id` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spritesId` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statsId` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_pokemon_id_fkey";

-- DropIndex
DROP INDEX "Pokemon_name_key";

-- DropIndex
DROP INDEX "Type_name_key";

-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "atk",
DROP COLUMN "atk_spe",
DROP COLUMN "createdAt",
DROP COLUMN "def",
DROP COLUMN "def_spe",
DROP COLUMN "hp",
DROP COLUMN "name",
DROP COLUMN "speed",
DROP COLUMN "type_id",
DROP COLUMN "updatedAt",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "generation" INTEGER NOT NULL,
ADD COLUMN     "nameId" INTEGER NOT NULL,
ADD COLUMN     "pokedex_id" INTEGER NOT NULL,
ADD COLUMN     "spritesId" INTEGER NOT NULL,
ADD COLUMN     "statsId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "color",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "image" TEXT NOT NULL;

-- DropTable
DROP TABLE "Team";

-- CreateTable
CREATE TABLE "Name" (
    "id" SERIAL NOT NULL,
    "fr" TEXT NOT NULL,
    "en" TEXT NOT NULL,
    "jp" TEXT NOT NULL,

    CONSTRAINT "Name_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sprites" (
    "id" SERIAL NOT NULL,
    "regular" TEXT NOT NULL,
    "shiny" TEXT NOT NULL,
    "gmax" TEXT,

    CONSTRAINT "Sprites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Talent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tc" BOOLEAN NOT NULL,

    CONSTRAINT "Talent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" SERIAL NOT NULL,
    "hp" INTEGER NOT NULL,
    "atk" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "spe_atk" INTEGER NOT NULL,
    "spe_def" INTEGER NOT NULL,
    "vit" INTEGER NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resistance" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "multiplier" DOUBLE PRECISION NOT NULL,
    "pokemonId" INTEGER NOT NULL,

    CONSTRAINT "Resistance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PokemonToType_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PokemonToTalent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PokemonToTalent_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- CreateIndex
CREATE INDEX "_PokemonToTalent_B_index" ON "_PokemonToTalent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_pokedex_id_key" ON "Pokemon"("pokedex_id");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_nameId_key" ON "Pokemon"("nameId");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_spritesId_key" ON "Pokemon"("spritesId");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_statsId_key" ON "Pokemon"("statsId");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_spritesId_fkey" FOREIGN KEY ("spritesId") REFERENCES "Sprites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "Stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resistance" ADD CONSTRAINT "Resistance_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToTalent" ADD CONSTRAINT "_PokemonToTalent_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToTalent" ADD CONSTRAINT "_PokemonToTalent_B_fkey" FOREIGN KEY ("B") REFERENCES "Talent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
