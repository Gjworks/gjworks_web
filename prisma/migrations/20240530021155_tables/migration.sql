/*
  Warnings:

  - You are about to drop the column `moduleId` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mid]` on the table `Module` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_address]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nickName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `moduleId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Module_moduleId_key` ON `Module`;

-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- DropIndex
DROP INDEX `User_nickname_key` ON `User`;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `color` VARCHAR(45) NULL,
    ADD COLUMN `desc` VARCHAR(191) NULL,
    ADD COLUMN `moduleId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Module` DROP COLUMN `moduleId`,
    ADD COLUMN `mid` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `email`,
    DROP COLUMN `nickname`,
    ADD COLUMN `accountId` VARCHAR(191) NULL,
    ADD COLUMN `email_address` VARCHAR(191) NULL,
    ADD COLUMN `nickName` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `UserGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `groupTitle` VARCHAR(45) NOT NULL,
    `groupDesc` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserGroupUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `groupId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Module_mid_key` ON `Module`(`mid`);

-- CreateIndex
CREATE UNIQUE INDEX `User_accountId_key` ON `User`(`accountId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_address_key` ON `User`(`email_address`);

-- CreateIndex
CREATE UNIQUE INDEX `User_nickName_key` ON `User`(`nickName`);

-- AddForeignKey
ALTER TABLE `UserGroupUser` ADD CONSTRAINT `UserGroupUser_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `UserGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserGroupUser` ADD CONSTRAINT `UserGroupUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
