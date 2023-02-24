'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import PageWrap from 'components/sections/PageWrap'

const Page = () => {
  const codeString = `<button
  className="group relative flex items-center"
  onClick={() => setShowDropdown(!showDropdown)}
>
  <div className="flex py-2 px-3 lg:px-5 rounded-full bg-primary-500 hover:bg-primary-600 transition duration-300">
    <div className="text-white group-hover:text-white p-0 lg:pr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </div>
    <div className="hidden lg:block text-white group-hover:text-white text-xs">
      Account
    </div>
  </div>
</button>
<Dropdown state={showDropdown} close={closeDropdown}>
  <AccountDropwdown />
</Dropdown>`

  return (
    <>
      <PageWrap>
        <div className="text-primary-400 text-base">Components</div>
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white pt-10 pb-5">
          Dropdown
        </div>
        <div className="text-base text-dark-300 mb-1">
          드랍다운 메뉴를 사용할 수 있습니다.
        </div>
        <div className="relative bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
          <SyntaxHighlighter
            language="javascript"
            style={gruvboxDark}
            wrapLongLines={true}
            customStyle={{
              backgroundColor: 'transparent',
              padding: '1rem',
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </PageWrap>
    </>
  )
}

export default Page
