/*
  Warnings:

  - You are about to drop the column `groupName` on the `UserGroupUser` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `UserGroupUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UserGroupUser` DROP FOREIGN KEY `UserGroupUser_groupName_fkey`;

-- AlterTable
ALTER TABLE `UserGroupUser` DROP COLUMN `groupName`,
    ADD COLUMN `groupId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `UserGroupUser` ADD CONSTRAINT `UserGroupUser_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `UserGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
