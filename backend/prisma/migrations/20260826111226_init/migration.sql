-- CreateTable
CREATE TABLE "Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "ipAsignada" TEXT NOT NULL,
    "oficina" TEXT NOT NULL,
    "telefono" TEXT,
    "estado" TEXT
);
