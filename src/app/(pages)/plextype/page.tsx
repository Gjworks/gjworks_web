'use client'
import { useState } from 'react'
import Link from 'next/link'
import Codehighlighte from '@plextype/components/codehighlight/Codehighlighter'

import Modal from '@plextype/components/modal/Modal'

const Page = () => {
  const [showModalTop, setShowModalTop] = useState(false)
  const closeModalTop = close => {
    setShowModalTop(close)
  }

  const [showModalCenter, setShowModalCenter] = useState(false)
  const closeModalCenter = close => {
    setShowModalCenter(close)
  }

  const [showModalBottom, setShowModalBottom] = useState(false)
  const closeModalBottom = close => {
    setShowModalBottom(close)
  }

  const [showModalSm, setShowModalSm] = useState(false)
  const closeModalSm = close => {
    setShowModalSm(close)
  }

  const [showModalMd, setShowModalMd] = useState(false)
  const closeModalMd = close => {
    setShowModalMd(close)
  }

  const [showModalLg, setShowModalLg] = useState(false)
  const closeModalLg = close => {
    setShowModalLg(close)
  }

  const [showModalXl, setShowModalXl] = useState(false)
  const closeModalXl = close => {
    setShowModalXl(close)
  }

  const [showModal2Xl, setShowModal2Xl] = useState(false)
  const closeModal2Xl = close => {
    setShowModal2Xl(close)
  }

  const modalString = `import { useState } from 'react'
import Modal from 'src/components/modal/Modal'

const [showModal, setShowModal] = useState(false);
const closeModal = (close) => {
  setShowModal(close);
};

<button onClick={() => setShowModal(!showModal)}>
  Modal Button
</button>
<Modal 
  state={showModal}
  close={closeModal} 
  size="md" 
  position="center" 
  day="1" 
  desc"일동안 그만보기"
>
  // Child Components
</Modal>`

  return (
    <>
      <div className="max-w-screen-lg mx-auto px-3 pt-10 pb-20">
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-2">
            <Link
              href="#"
              className="block text-sm mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Documentation
            </Link>
            <Link
              href="#"
              className="block text-sm mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Modal
            </Link>
            <Link
              href="#"
              className="block text-sm mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Dropdown
            </Link>
          </div>

          <div className="col-span-5">
            <div className="">
              <div className="text-gray-950 text-2xl font-semibold mb-5">
                Modal
              </div>
              <div className="text-sm mb-5 text-gray-500">
                엘리먼트를 클릭시 위에서 아래 혹은 아래에서 위로 올라오는 레이어
                모달을 의미함.
              </div>
              <div className="mb-8">
                <Codehighlighte
                  title="Modal Code Example"
                  value={modalString}
                  lang="jsx"
                />
              </div>
              <div className="text-gray-950 text-xl font-semibold mb-5">
                위치
              </div>
              <div className="text-sm mb-5 text-gray-500">
                모달의 위치를 정할 수 있습니다. top, center, bottom을 사용할 수
                있습니다.
              </div>
              <div className="mb-8 flex gap-4">
                <button
                  className="p-2 px-5 border border-gray-200 hover:bg-gray-50 shadow-sm text-sm rounded-md"
                  onClick={() => setShowModalTop(!showModalTop)}
                >
                  Top Modal
                </button>
                <button
                  className="p-2 px-5 border border-gray-200 hover:bg-gray-50 shadow-sm text-sm rounded-md"
                  onClick={() => setShowModalCenter(!showModalCenter)}
                >
                  Center Modal
                </button>
                <button
                  className="p-2 px-5 border border-gray-200 hover:bg-gray-50 shadow-sm text-sm rounded-md"
                  onClick={() => setShowModalBottom(!showModalBottom)}
                >
                  Bottom Modal
                </button>
              </div>
              <Modal
                state={showModalTop}
                close={closeModalTop}
                size="md"
                position="top"
              >
                <div className="p-20 text-center text-gray-950">Top 모달</div>
              </Modal>
              <Modal
                state={showModalCenter}
                close={closeModalCenter}
                size="md"
                position="center"
              >
                <div className="p-20 text-center text-gray-950">
                  Center 모달
                </div>
              </Modal>
              <Modal
                state={showModalBottom}
                close={closeModalBottom}
                size="md"
                position="bottom"
              >
                <div className="p-20 text-center text-gray-950">
                  Bottom 모달
                </div>
              </Modal>

              <div className="mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <th className="p-2 text-sm italic font-medium">name</th>
                      <th className="p-2 text-sm italic font-medium">type</th>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">top</td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          top-5
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">
                          center(기본값)
                        </td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          top:50
                        </td>
                      </tr>
                      <tr className="">
                        <td className="py-2 px-3 text-sm text-gray-500">
                          bottom
                        </td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          bottom-2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-gray-950 text-xl font-semibold mb-5">
                사이즈
              </div>
              <div className="text-sm mb-5 text-gray-500">
                모달의 사이즈를 정할 수 있습니다. sm, md, lg, xl, 2xl을 사용할
                수 있습니다.
              </div>
              <div className="mb-8 flex gap-4">
                <button
                  className="p-2 px-5 border border-gray-200 hover:bg-gray-50 shadow-sm text-sm rounded-md"
                  onClick={() => setShowModalSm(!showModalSm)}
                >
                  sm Modal
                </button>
                <button
                  className="p-2 px-5 border border-gray-200 hover:bg-gray-50 shadow-sm text-sm rounded-md"
                  onClick={() => setShowModalMd(!showModalMd)}
                >
                  md Modal (기본값)
                </button>
                <button
                  className="p-2 px-5 border border-gray-200 hover:bg-gray-50 shadow-sm text-sm rounded-md"
                  onClick={() => setShowModalLg(!showModalLg)}
                >
                  lg Modal
                </button>
                <button
                  className="p-2 px-5 border border-gray-200 hover:bg-gray-50 shadow-sm text-sm rounded-md"
                  onClick={() => setShowModalXl(!showModalXl)}
                >
                  xl Modal
                </button>
                <button
                  className="p-2 px-5 border border-gray-200 hover:bg-gray-50 shadow-sm text-sm rounded-md"
                  onClick={() => setShowModal2Xl(!showModal2Xl)}
                >
                  2xl Modal
                </button>
              </div>
              <Modal
                state={showModalSm}
                close={closeModalSm}
                size="sm"
                position="center"
              >
                <div className="p-20 text-center text-gray-950">sm 모달</div>
              </Modal>
              <Modal
                state={showModalMd}
                close={closeModalMd}
                size="md"
                position="center"
              >
                <div className="p-20 text-center text-gray-950">md 모달</div>
              </Modal>
              <Modal
                state={showModalLg}
                close={closeModalLg}
                size="lg"
                position="center"
              >
                <div className="p-20 text-center text-gray-950">lg 모달</div>
              </Modal>
              <Modal
                state={showModalXl}
                close={closeModalXl}
                size="xl"
                position="center"
              >
                <div className="p-20 text-center text-gray-950">lg 모달</div>
              </Modal>
              <Modal
                state={showModal2Xl}
                close={closeModal2Xl}
                size="2xl"
                position="center"
              >
                <div className="p-20 text-center text-gray-950">lg 모달</div>
              </Modal>
              <div className="mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full border border-gray-200 rounded-lg overflow-hidden ">
                    <thead className="bg-gray-100">
                      <th className="p-2 text-sm italic font-medium">name</th>
                      <th className="p-2 text-sm italic font-medium">type</th>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">sm</td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          max-w-screen-sm
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">md</td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          max-w-screen-md
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">lg</td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          max-w-screen-lg
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">xl</td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          max-w-screen-xl
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">2xl</td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          max-w-screen-2xl
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <th className="p-2 text-sm italic font-medium">name</th>
                      <th className="p-2 text-sm italic font-medium">type</th>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">day</td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          1, 7, 15
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 text-sm text-gray-500">
                          desc
                        </td>
                        <td className="py-2 px-3 text-sm text-gray-500">
                          일동안 그만 보기
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
