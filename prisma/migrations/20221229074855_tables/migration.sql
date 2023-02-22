/*
  Warnings:

  - You are about to drop the `Module` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_moduleId_fkey`;

-- DropTable
DROP TABLE `Module`;
