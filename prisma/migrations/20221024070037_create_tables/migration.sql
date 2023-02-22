/*
  Warnings:

  - Added the required column `content` to the `gw_document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gw_document` ADD COLUMN `content` VARCHAR(191) NOT NULL;
