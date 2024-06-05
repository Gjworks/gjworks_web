/*
  Warnings:

  - You are about to drop the column `moduleFK` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `authorFK` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `categoryFK` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `moduleFK` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `authorFK` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `groupFK` on the `UserGroupUser` table. All the data in the column will be lost.
  - You are about to drop the column `userFK` on the `UserGroupUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[groupName]` on the table `UserGroup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `moduleId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleId` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupName` to the `UserGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `UserGroupUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserGroupUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_moduleFK_fkey`;

-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_authorFK_fkey`;

-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_categoryFK_fkey`;

-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_moduleFK_fkey`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_authorFK_fkey`;

-- DropForeignKey
ALTER TABLE `UserGroupUser` DROP FOREIGN KEY `UserGroupUser_groupFK_fkey`;

-- DropForeignKey
ALTER TABLE `UserGroupUser` DROP FOREIGN KEY `UserGroupUser_userFK_fkey`;

-- DropIndex
DROP INDEX `User_userId_key` ON `User`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `moduleFK`,
    ADD COLUMN `moduleId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Document` DROP COLUMN `authorFK`,
    DROP COLUMN `categoryFK`,
    DROP COLUMN `moduleFK`,
    ADD COLUMN `categoryId` INTEGER NULL,
    ADD COLUMN `moduleId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Profile` DROP COLUMN `authorFK`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `userId`,
    ADD COLUMN `accountId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `UserGroup` ADD COLUMN `groupName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `UserGroupUser` DROP COLUMN `groupFK`,
    DROP COLUMN `userFK`,
    ADD COLUMN `groupId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Profile_userId_key` ON `Profile`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_accountId_key` ON `User`(`accountId`);

-- CreateIndex
CREATE UNIQUE INDEX `UserGroup_groupName_key` ON `UserGroup`(`groupName`);

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserGroupUser` ADD CONSTRAINT `UserGroupUser_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `UserGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserGroupUser` ADD CONSTRAINT `UserGroupUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
