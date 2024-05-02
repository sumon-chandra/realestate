-- CreateTable
CREATE TABLE "PropertyContact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" INTEGER,
    "facebookUsername" TEXT,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "PropertyContact_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PropertyFeature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "parkingSpots" INTEGER,
    "area" INTEGER,
    "hasSwimmingPool" BOOLEAN,
    "hasGardenYard" BOOLEAN,
    "hasbalcony" BOOLEAN,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "PropertyFeature_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PropertyFeature" ("area", "bathrooms", "bedrooms", "hasGardenYard", "hasSwimmingPool", "hasbalcony", "id", "parkingSpots", "propertyId") SELECT "area", "bathrooms", "bedrooms", "hasGardenYard", "hasSwimmingPool", "hasbalcony", "id", "parkingSpots", "propertyId" FROM "PropertyFeature";
DROP TABLE "PropertyFeature";
ALTER TABLE "new_PropertyFeature" RENAME TO "PropertyFeature";
CREATE UNIQUE INDEX "PropertyFeature_propertyId_key" ON "PropertyFeature"("propertyId");
CREATE TABLE "new_PropertyLocation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "zip" TEXT,
    "region" TEXT,
    "landmark" TEXT,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "PropertyLocation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PropertyLocation" ("city", "id", "landmark", "propertyId", "region", "state", "street", "zip") SELECT "city", "id", "landmark", "propertyId", "region", "state", "street", "zip" FROM "PropertyLocation";
DROP TABLE "PropertyLocation";
ALTER TABLE "new_PropertyLocation" RENAME TO "PropertyLocation";
CREATE UNIQUE INDEX "PropertyLocation_propertyId_key" ON "PropertyLocation"("propertyId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "PropertyContact_propertyId_key" ON "PropertyContact"("propertyId");
