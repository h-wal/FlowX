/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_roomId_fkey";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "roomId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Room_slug_key" ON "Room"("slug");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_slug_fkey" FOREIGN KEY ("slug") REFERENCES "Room"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
