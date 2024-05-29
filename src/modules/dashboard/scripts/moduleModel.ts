'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getModule = (id:number) => {
  if(!id) return new Error('id is required')
  return prisma.module.findUnique({
    where: {
      id: id
    }
  })

}

export const getModuleByName = async (moduleName:string) => {
  let response
  let moduleInfo
  if(!moduleName) {
    response = {
      success: true,
      type: "error",
      element: 'moduleName',
      message : '해당 모듈이 없습니다.',
      data: ''
    }
  }
  moduleInfo = await prisma.module.findUnique({
    where: {
      moduleId: moduleName
    }
  })
  console.log(moduleName)
  if(!moduleInfo) {
    response = {
      success: true,
      type: "error",
      element: 'moduleName',
      message : '해당 모듈이 없습니다.',
      data: ''
    }
  }
  response = {
    success: true,
      type: "success",
      data: moduleInfo
  }
  return response
}