'use client'

import Link from 'next/link'
import Codehighlighte from '@plextype/components/codehighlight/Codehighlighter'

const Page = () => {
  const modalString = `import Modal from 'src/components/modal/Modal'

const [showModal, setShowModal] = useState(false);
const closeModal = (close) => {
  setShowModal(close);
};

<button onClick={() => setShowModal(!showModal)}>
  Modal Button
</button>
<Modal state={showModal} close={closeModal}>
  // Child Components
</Modal>`

  const popupString = `import Popup from 'src/components/modal/Popup'

const [showPopup, setShowPopup] = useState(false);
const closePopup = (close) => {
  setShowPopup(close);
};

<button onClick={() => setShowPopup(!showPopup)}>
  Popup Button
</button>
<Popup state={showPopup} close={closePopup}>
  // Child Components
</Popup>`

  const dropdownString = `import Dropdown from 'src/components/dropdown/Dropdown'

const [showDropdown, setShowDropdown] = useState(false)
const closeDropdown = close => {
  setShowDropdown(close)
}

<Dropdown state={showDropdown} title="타이틀 이름을 입력하세요." close={closeDropdown}>
  //Dropdown Child Component
</Dropdown>
`

  return (
    <>
      <div className="max-w-screen-lg mx-auto px-3 pt-10 pb-20">
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-2">
            <Link
              href="#"
              className="block text-base mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Documentation
            </Link>
            <Link
              href="#"
              className="block text-base mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Modals
            </Link>
            <Link
              href="#"
              className="block text-base mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Popup
            </Link>
            <Link
              href="#"
              className="block text-base mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Dropdown
            </Link>
          </div>

          <div className="col-span-5">
            <div className="text-gray-950 text-4xl font-semibold mb-5">
              Started with Components
            </div>
            <div className="text-gray-500 text-sm mb-5">
              해당 문서는 Framer motion과 tailwindcss를 조합하여 만든 기본적인
              컴포넌트 들입니다. 사용하는 방법과 커스텀 할 수 있는 방법을
              알려드립니다.
            </div>
            <div className="py-8">
              <div className="text-gray-950 text-2xl font-semibold mb-5">
                Modal
              </div>
              <div className="text-sm mb-5 text-gray-500">
                엘리먼트를 클릭시 위에서 아래 혹은 아래에서 위로 올라오는 레이어
                모달을 의미함.
              </div>
              <Codehighlighte
                title="Modal Code Example"
                value={modalString}
                lang="jsx"
              />
            </div>
            <div className="py-8">
              <div className="text-gray-950 text-2xl font-semibold mb-5">
                Popup
              </div>
              <div className="text-sm mb-5 text-gray-500">
                모달과는 다르게 아래에서 고정되는 형태이며 팝업을 다시 띄우지
                않는 기간 설정이 가능합니다.
              </div>
              <Codehighlighte
                title="Popup Code Example"
                value={popupString}
                lang="jsx"
              />
            </div>
            <div className="py-8">
              <div className="text-gray-950 text-2xl font-semibold mb-5">
                Dropdown
              </div>
              <div className="text-sm mb-5 text-gray-500">
                특정요소가 action이 될 시에 드랍되는 메뉴를 지칭 합니다. 메뉴
                이외에 다양한 요소를 넣어도 됩니다.
              </div>
              <Codehighlighte
                title="Modal Code Example"
                value={dropdownString}
                lang="jsx"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
