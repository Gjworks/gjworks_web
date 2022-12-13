/*
  Warnings:

  - You are about to drop the column `phone` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Documents` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `isAdmin` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isManagers` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Documents` DROP FOREIGN KEY `Documents_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Documents` DROP FOREIGN KEY `Documents_moduleId_fkey`;

-- DropIndex
DROP INDEX `Users_phone_key` ON `Users`;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `phone`,
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL,
    ADD COLUMN `isManagers` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `Documents`;

-- CreateTable
CREATE TABLE `Profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NOT NULL,

    UNIQUE INDEX `Profiles_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `moduleId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `authorId` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `readCount` INTEGER NOT NULL,
    `commentCount` INTEGER NOT NULL,
    `voteCount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profiles` ADD CONSTRAINT `Profiles_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Modules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
