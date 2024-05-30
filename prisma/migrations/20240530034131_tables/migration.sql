/*
  Warnings:

  - You are about to drop the column `moduleId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `moduleId` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `UserGroupUser` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserGroupUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorFK]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `moduleFK` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleFK` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorFK` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupFK` to the `UserGroupUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userFK` to the `UserGroupUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_moduleId_fkey`;

-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_moduleId_fkey`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `UserGroupUser` DROP FOREIGN KEY `UserGroupUser_groupId_fkey`;

-- DropForeignKey
ALTER TABLE `UserGroupUser` DROP FOREIGN KEY `UserGroupUser_userId_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `moduleId`,
    ADD COLUMN `moduleFK` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Document` DROP COLUMN `authorId`,
    DROP COLUMN `categoryId`,
    DROP COLUMN `moduleId`,
    ADD COLUMN `authorFK` INTEGER NULL,
    ADD COLUMN `categoryFK` INTEGER NULL,
    ADD COLUMN `moduleFK` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Profile` DROP COLUMN `authorId`,
    ADD COLUMN `authorFK` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `UserGroupUser` DROP COLUMN `groupId`,
    DROP COLUMN `userId`,
    ADD COLUMN `groupFK` INTEGER NOT NULL,
    ADD COLUMN `userFK` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Profile_authorFK_key` ON `Profile`(`authorFK`);

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_authorFK_fkey` FOREIGN KEY (`authorFK`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserGroupUser` ADD CONSTRAINT `UserGroupUser_groupFK_fkey` FOREIGN KEY (`groupFK`) REFERENCES `UserGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserGroupUser` ADD CONSTRAINT `UserGroupUser_userFK_fkey` FOREIGN KEY (`userFK`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_moduleFK_fkey` FOREIGN KEY (`moduleFK`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_categoryFK_fkey` FOREIGN KEY (`categoryFK`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_authorFK_fkey` FOREIGN KEY (`authorFK`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_moduleFK_fkey` FOREIGN KEY (`moduleFK`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
