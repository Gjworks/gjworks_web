-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_moduleId_fkey`;

-- AlterTable
ALTER TABLE `Document` MODIFY `moduleId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
