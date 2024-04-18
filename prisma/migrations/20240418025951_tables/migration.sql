/*
  Warnings:

  - Added the required column `moduleId` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Module` ADD COLUMN `moduleId` VARCHAR(191) NOT NULL;
