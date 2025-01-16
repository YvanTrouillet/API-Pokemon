/*
  Warnings:

  - The `egg_groups` column on the `Pokemon` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Name" DROP CONSTRAINT "Name_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "Sprites" DROP CONSTRAINT "Sprites_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_pokemonId_fkey";

-- AlterTable
ALTER TABLE "Name" ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "egg_groups",
ADD COLUMN     "egg_groups" JSONB;

-- AlterTable
ALTER TABLE "Sprites" ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Stats" ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Name" ADD CONSTRAINT "Name_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sprites" ADD CONSTRAINT "Sprites_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
