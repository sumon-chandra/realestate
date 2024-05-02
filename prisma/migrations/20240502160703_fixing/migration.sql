-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PropertyContact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT,
    "facebookUsername" TEXT,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "PropertyContact_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PropertyContact" ("email", "facebookUsername", "id", "phone", "propertyId", "whatsapp") SELECT "email", "facebookUsername", "id", "phone", "propertyId", "whatsapp" FROM "PropertyContact";
DROP TABLE "PropertyContact";
ALTER TABLE "new_PropertyContact" RENAME TO "PropertyContact";
CREATE UNIQUE INDEX "PropertyContact_propertyId_key" ON "PropertyContact"("propertyId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
