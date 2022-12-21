import { PrismaClient } from '@prisma/client'
import { handleClientScriptLoad } from 'next/script';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { title, description } = JSON.parse(req.body);
  console.log(JSON.parse(req.body));
  // Then save the post data to a database
  res.status(200).json({ message: "Post created successfully" });
}