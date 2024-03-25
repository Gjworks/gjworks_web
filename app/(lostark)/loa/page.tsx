'use client'

import {useState, useEffect} from 'react'
import fetchUserData from './server'

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
      <div className="py-20">
        <div className="max-w-screen-2xl mx-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden rounded-2xl">
                <div className="text-lg font-semibold text-sky-600 pl-3 pt-2 mb-5">
                  베히모스
                </div>
                <div className="bg-sky-100 text-sky-700 text-center py-2 px-4 text-sm">
                  상아탑 졸업
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
                {character.map(character => {
                  if (
                    1675 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1640
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
                <div className="text-lg font-semibold text-blue-600 pl-3 pt-2 mb-5">
                  카멘(하드) & 에키드나(하드)
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
                {character.map(character => {
                  if (
                    1675 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1630
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
                <div className="text-lg font-semibold text-rose-600 pl-3 pt-2 mb-5">
                  에키드나(노말)
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
                {character.map(character => {
                  if (
                    1630 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1620
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
                <div className="text-lg font-semibold text-yellow-600 pl-3 pt-2 mb-5">
                  상아탑(하드)
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
                {character.map(character => {
                  if (
                    1640 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1620
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
                <div className="text-lg font-semibold text-blue-600 pl-3 pt-2 mb-5">
                  카멘(노말)
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
                {character.map(character => {
                  if (
                    1629 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1610
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
                <div className="text-lg font-semibold text-yellow-600 pl-3 pt-2 mb-5">
                  상아탑 (노말)
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
                {character.map(character => {
                  if (
                    1619 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1600
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
                <div className="text-lg font-semibold text-green-600 pl-3 pt-2 mb-5">
                  일리아칸 (하드)
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
                {character.map(character => {
                  if (
                    1619 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1600
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
                <div className="text-lg font-semibold text-green-600 pl-3 pt-2 mb-5">
                  일리아칸 (노말)
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
                {character.map(character => {
                  if (
                    1599 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1580
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
                <div className="text-lg font-semibold text-purple-600 pl-3 pt-2 mb-5">
                  카양겔 (하드)
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
                {character.map(character => {
                  if (
                    1609 >= character.itemAvgLevel &&
                    character.itemAvgLevel >= 1580
                  ) {
                    return (
                      <div className="grid grid-cols-4 gap-4 hover:bg-gray-100">
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
    </>
  )
}

export default Loa
