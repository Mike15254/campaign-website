"use client";
import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { prisma } from '@/lib/prismaClient';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
  }),
});

const uploadMiddleware = upload.single('image');

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest & { file: Express.Multer.File }, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await runMiddleware(req, res, uploadMiddleware);

      const { title, description } = req.body;

      const media = await prisma.media.create({
        data: {
          title,
          description,
          imageUrl: `/uploads/${req.file.filename}`,
        },
      });

      res.status(201).json({ message: 'Media uploaded successfully.', media });
    } catch (err) {
      res.status(500).json({ error: `Internal server error: ${err.message}` });
    }
  }

  if (req.method === 'GET') {
    try {
      // Fetch blogs from the database
      const media = await prisma.media.findMany({
        orderBy: { createdAt: 'desc' }, // Order by creation date (newest first)
      });

      res.status(200).json(media);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Media' });
    }
  }
}

