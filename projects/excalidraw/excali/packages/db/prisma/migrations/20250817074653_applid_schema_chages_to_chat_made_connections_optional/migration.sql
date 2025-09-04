/*
  Warnings:

  - You are about to drop the column `slug` on the `Chat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_slug_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_userId_fkey";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "slug",
ADD COLUMN     "roomslug" TEXT,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_roomslug_fkey" FOREIGN KEY ("roomslug") REFERENCES "Room"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
