-- CreateTable
CREATE TABLE "Jobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "state" TEXT NOT NULL DEFAULT 'QUEUED',
    "priority" INTEGER NOT NULL DEFAULT 10,
    "filepath" TEXT NOT NULL,
    "command" TEXT,
    "description" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "beginAt" DATETIME,
    "finishAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
