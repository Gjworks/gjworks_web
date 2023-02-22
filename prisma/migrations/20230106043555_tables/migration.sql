/*
  Warnings:

  - A unique constraint covering the columns `[moduleId]` on the table `Document` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Document` ADD COLUMN `categoryId` INTEGER NULL,
    ADD COLUMN `isNotice` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `isSecrets` BOOLEAN NULL DEFAULT false;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Module` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `moduleType` VARCHAR(191) NOT NULL,
    `moduleName` VARCHAR(191) NOT NULL,
    `moduleDesc` VARCHAR(191) NULL,
    `grant` JSON NOT NULL,
    `config` JSON NOT NULL,
    `status` VARCHAR(45) NULL,

    UNIQUE INDEX `Module_moduleName_key`(`moduleName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Document_moduleId_key` ON `Document`(`moduleId`);

-- CreateIndex
CREATE UNIQUE INDEX `Profile_authorId_key` ON `Profile`(`authorId`);

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
