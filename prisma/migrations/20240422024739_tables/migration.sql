/*
  Warnings:

  - You are about to alter the column `moduleType` on the `Module` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(45)`.
  - A unique constraint covering the columns `[moduleId]` on the table `Module` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Module` MODIFY `moduleType` VARCHAR(45) NULL,
    MODIFY `grant` JSON NULL,
    MODIFY `config` JSON NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Module_moduleId_key` ON `Module`(`moduleId`);
