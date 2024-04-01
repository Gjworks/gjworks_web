'use client'

import { useState, useEffect } from 'react'
import fetchUserData from './server'
import Image from 'next/image'

interface Character {
  mainCharacter: string
  characterName: string
  characterClassName: string
  itemAvgLevel: number
}
;[]

const Loa = () => {
  const [player, setPlayer] = useState<string[]>([
    '루멘xd',
    '오또콩',
    '오징어의참맛',
    '새우맛새우튀김',
  ])

  const [character, setCharacter] = useState<Character[]>([])

  useEffect(() => {
    const fetchData = async () => {
      for (const index of player) {
        const data = await fetchUserData(index)

        Object.entries(data.characters).forEach(([, value]) => {
          let newCharacter = {
            mainCharacter: data.mainCharacter,
            characterName: value.characterName,
            characterClassName: value.characterClassName,
            itemAvgLevel: parseFloat(value.itemAvgLevel.replace(',', '')),
          }
          setCharacter(prevCharacters => [...prevCharacters, newCharacter])
        })
      }
    }

    fetchData()
  }, [player])

  useEffect(() => {
    console.log(character)
  }, [character])

  return (
    <>
      <Image src="/assets/images/bg10.jpg" alt="dd" width={660} height={660} />
      <div className="py-20">
        <div className="flex gap-8">
          <div className="flex px-3">
            <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
              {character.map((character, key) => {
                return (
                  <>
                    <div
                      key={key}
                      className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                    >
                      <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                        {character.characterName}
                      </div>

                      <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                        {character.itemAvgLevel}
                      </div>

                      <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                        {character.characterClassName}
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
          <div className="flex-1">
            <div className="max-w-screen-2xl mx-auto px-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-sky-600">
                        베히모스
                      </div>
                      <div className="text-base text-sky-600">
                        (1640 ~ 1675)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1676 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1640
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-blue-600">
                        카멘(하드) & 에키드나(하드)
                      </div>
                      <div className="text-base text-blue-600">
                        (1630 ~ 1675)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1676 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1630
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-rose-600">
                        에키드나(노말)
                      </div>
                      <div className="text-base text-rose-600">
                        (1620 ~ 1630)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1630 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1620
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-yellow-600">
                        상아탑(하드)
                      </div>
                      <div className="text-base text-yellow-600">
                        (1620 ~ 1639)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1640 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1620
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-blue-600">
                        카멘(노말)
                      </div>
                      <div className="text-base text-blue-600">
                        (1610 ~ 1629)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1630 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1610
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-yellow-600">
                        상아탑(노말)
                      </div>
                      <div className="text-base text-yellow-600">
                        (1600 ~ 1619)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1620 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1600
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-green-600">
                        일리아칸(하드)
                      </div>
                      <div className="text-base text-green-600">
                        (1600 ~ 1619)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1620 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1600
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-green-600">
                        일리아칸(노말)
                      </div>
                      <div className="text-base text-green-600">
                        (1580 ~ 1599)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1600 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1580
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                    <div className="flex flex-wrap justify-between gap-4 px-3 pt-2 mb-5">
                      <div className="text-lg font-semibold text-purple-600">
                        일리아칸(노말)
                      </div>
                      <div className="text-base text-purple-600">
                        (1580 ~ 1609)
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        캐릭이름
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        아이템레벨
                      </div>
                      <div className="col-span-1 text-gray-500 bg-gray-50 py-2 px-3 text-center text-xs">
                        직업
                      </div>
                    </div>
                    {character.map((character, key) => {
                      if (
                        1610 > character.itemAvgLevel &&
                        character.itemAvgLevel >= 1580
                      ) {
                        return (
                          <div
                            key={key}
                            className="grid grid-cols-4 gap-4 hover:bg-gray-100"
                          >
                            <div className="col-span-2 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterName}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.itemAvgLevel}
                            </div>

                            <div className="col-span-1 text-gray-500 hover:text-gray-950 text-sm py-2 px-5 ">
                              {character.characterClassName}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loa
