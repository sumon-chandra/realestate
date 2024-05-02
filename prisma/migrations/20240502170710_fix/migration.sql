/*
  Warnings:

  - You are about to drop the column `hasbalcony` on the `PropertyFeature` table. All the data in the column will be lost.

*/
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
    "hasBalcony" BOOLEAN,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "PropertyFeature_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PropertyFeature" ("area", "bathrooms", "bedrooms", "hasGardenYard", "hasSwimmingPool", "id", "parkingSpots", "propertyId") SELECT "area", "bathrooms", "bedrooms", "hasGardenYard", "hasSwimmingPool", "id", "parkingSpots", "propertyId" FROM "PropertyFeature";
DROP TABLE "PropertyFeature";
ALTER TABLE "new_PropertyFeature" RENAME TO "PropertyFeature";
CREATE UNIQUE INDEX "PropertyFeature_propertyId_key" ON "PropertyFeature"("propertyId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
