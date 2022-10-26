-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "state" TEXT NOT NULL DEFAULT 'QUEUED',
    "priority" INTEGER NOT NULL DEFAULT 10,
    "description" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "beginAt" TEXT,
    "finishAt" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Jobs" ("beginAt", "completed", "createdAt", "description", "finishAt", "id", "priority", "state", "updatedAt") SELECT "beginAt", "completed", "createdAt", "description", "finishAt", "id", "priority", "state", "updatedAt" FROM "Jobs";
DROP TABLE "Jobs";
ALTER TABLE "new_Jobs" RENAME TO "Jobs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
