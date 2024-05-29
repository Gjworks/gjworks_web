import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function moduleHandler(req: NextApiRequest, res: NextApiResponse) {
  // 모듈이 있는 디렉토리 경로
  const moduleDir = './src/modules';

  // 디렉토리 내의 파일 목록 가져오기
  const moduleFiles = fs.readdirSync(moduleDir);

  // 모든 모듈을 담을 배열
  const modules = [];

  // 각 파일에 대해 반복하여 모듈을 가져옴
  for (const file of moduleFiles) {
    // 파일의 절대 경로 설정
    const filePath = path.join(moduleDir, file);
    // 파일이 디렉토리가 아니고 TypeScript 파일인 경우
    if (fs.statSync(filePath).isFile() && filePath.endsWith('.ts')) {
      // 모듈 동적으로 불러오기
      const module = await import(filePath);
      console.log(module)
      // modules.push(module.default);
    }
  }

  // 모든 모듈을 응답으로 반환
  res.status(200).json({ modules });
}