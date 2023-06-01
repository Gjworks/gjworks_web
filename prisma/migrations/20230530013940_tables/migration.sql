/*
  Warnings:

  - Made the column `moduleId` on table `Document` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_moduleId_fkey`;

-- AlterTable
ALTER TABLE `Document` MODIFY `moduleId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
