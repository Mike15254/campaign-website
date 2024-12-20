import { PrismaClient } from '@prisma/client';

// Use a singleton pattern to prevent creating multiple instances of PrismaClient
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

