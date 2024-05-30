/*
  Warnings:

  - Made the column `mid` on table `Module` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accountId` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email_address` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nickName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Module` MODIFY `mid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `accountId` VARCHAR(191) NOT NULL,
    MODIFY `email_address` VARCHAR(191) NOT NULL,
    MODIFY `nickName` VARCHAR(191) NOT NULL;
