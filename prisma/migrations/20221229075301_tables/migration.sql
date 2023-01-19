-- DropIndex
DROP INDEX `Document_authorId_fkey` ON `Document`;

-- DropIndex
DROP INDEX `Document_moduleId_fkey` ON `Document`;

-- AlterTable
ALTER TABLE `Document` MODIFY `readCount` INTEGER NOT NULL DEFAULT 0,
    MODIFY `commentCount` INTEGER NOT NULL DEFAULT 0,
    MODIFY `voteCount` INTEGER NOT NULL DEFAULT 0;
