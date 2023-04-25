'use client'

import Link from 'next/link'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { srcery } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import PageWrap from 'src/components/sections/PageWrap'

const Page = () => {
  const code1: string = `# NEXTAUTH_SECRET, NEXT_PUBLIC_SECRET 시크릿 키 값 생성하기
$ openssl rand -base64 32`
  const code2: string = `NEXTAUTH_URL=http://localhost:3000 
NEXT_PUBLIC_DEFAULT_URL="http://localhost:3000/"`
  const code3: string = `NEXTAUTH_URL=https://gjworks.dev/
NEXT_PUBLIC_DEFAULT_URL="https://gjworks.dev/"`
  const code4: string = ``
  return (
    <>
      <PageWrap>
        <div className="text-primary-500 text-base">Documentation</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black pt-10 pb-5">
          Installation
        </h1>
        <div className="text-base text-dark-300 mb-1">
          Esther의 Github 저장소에 접근권한이 있다면 해당 프레임워크를 사용할 수
          있고 설치 할 수 있습니다. Next.js + Framer Motion + srcerya +
          Tailwindcss등을 활용하여 웹 서비스를 개발하고 구축을 손쉽게 할 수
          있도록 제작되었습니다.
        </div>
        <div>
          <div className="text-xl sm:text-3xl font-extrabold tracking-tight text-black pt-10 pb-5">
            시스템 요구사항
          </div>
          <div className="text-base text-dark-300 mb-1">
            Node.js 14.6.0이상, MacOS, Windows, Linux 환경이어야 하며 git의
            설치와 기본 설정이 마무리 되어야 합니다. 그리고 Docker등을 활용하여
            MySQL등 설치하는것을 권장드립니다.
          </div>
          <div className="pl-5 py-5">
            <Link
              href="#"
              className="flex mb-2 text-primary-600 hover:underline hover:text-primary-500"
            >
              ⏺ Git 설치 및 기본설정
            </Link>
            <Link
              href="#"
              className="flex mb-2 text-primary-600 hover:underline hover:text-primary-500"
            >
              ⏺ Docker에서 MySQL 환경설정하기
            </Link>
          </div>
          <div className="text-base text-dark-300 mb-1"></div>
          <div className="text-xl sm:text-3xl font-extrabold tracking-tight text-black pt-10 pb-5">
            Git 설정
          </div>
          <div className="text-base text-dark-300 mb-1">
            Esther 가 있는 저장소에서{' '}
            <code className="text-xs bg-fuchsia-500/25 rounded-md text-fuchsia-400 italic py-[2px] px-1">
              clone
            </code>
            을 하여 자신의 로컬에 복제를 합니다.
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              $ git clone 'Esther remote repository'
            </SyntaxHighlighter>
          </div>

          <div className="text-base text-dark-300 mb-1">
            <code className="text-xs bg-fuchsia-500/25 rounded-md text-fuchsia-400 italic py-[2px] px-1">
              clone
            </code>
            에 성공한 저장소는 자신의 원격 저장소로 연결을 합니다.{' '}
          </div>
          <div className="flex text-base text-dark-300 mb-1">
            원격저장소는 여러 저장소들이 있지만 해당 문서는 깃허브(
            <Link
              href="https://github.com"
              target="_blank"
              className="flex text-primary-600 hover:underline hover:text-primary-500"
            >
              https://github.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>
            )으로 작성 되었습니다.
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              $ git remote set-url origin
              https://github.com/your_team/your_project.git
            </SyntaxHighlighter>
          </div>

          <div className="text-base text-dark-300 mb-1">
            그 후에{' '}
            <code className="text-xs bg-fuchsia-500/25 rounded-md text-fuchsia-400 italic py-[2px] px-1">
              branch
            </code>
            를 생성하고 작업을 진행 합니다. 되도록이면 'devel' 혹은 'test'
            브랜치를 생성하여 작업하는 것을 적극 권장드립니다.
          </div>
          <div className="text-xl sm:text-3xl font-extrabold tracking-tight text-black pt-10 pb-5">
            Package
          </div>
          <div className="text-base text-dark-300 mb-1">
            <code className="text-xs bg-fuchsia-500/25 rounded-md text-fuchsia-400 italic py-[2px] px-1">
              clone
            </code>{' '}
            한 파일중에{' '}
            <code className="text-xs bg-fuchsia-500/25 rounded-md text-fuchsia-400 italic py-[2px] px-1">
              package.json
            </code>
            이란 파일에 사이트 제작에 필요한 다양한 패키지들이 들어 있고 간단한{' '}
            <code className="text-xs bg-fuchsia-500/25 rounded-md text-fuchsia-400 italic py-[2px] px-1">
              npm
            </code>{' '}
            명령어를 통해서 설치 할 수 있습니다.
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              $ npm install
            </SyntaxHighlighter>
          </div>

          <div className="text-base text-dark-300 mb-1">
            package 설치과정에서 많은 오류와 문제점이 발생 할 수 있습니다. npm을
            항상 최신버전을 하기보단 안정화 된 버전을 사용을 권장드립니다. 설치
            시 발생하는 문제는 아래 링크를 통해 최대한 해결 할 수 있습니다.
          </div>
          <div className="pl-5 py-5">
            <Link
              href="#"
              className="flex mb-2 text-primary-600 hover:underline hover:text-primary-500"
            >
              ⏺ package 설치 오류 해결하기
            </Link>
          </div>
          <div>
            <div className="flex bg-primary-200/25 rounded-lg p-6 mb-10">
              <div className="flex items-center pr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                  />
                </svg>
                <div className="text-sm font-extrabold pl-1">tip!</div>
              </div>
              <div className="flex-1">
                <div className="text-primary-100 text-base mb-2">
                  Package 설치 시 유의사항
                </div>
                <div className="text-primary-200 text-sm">
                  Esther에서 제공하는 package.json을 사용하지 않고 이미 개발중인
                  사이트라면 필요한 라이브러리만 복사해서 사용하시면 됩니다. (이
                  경우 버전관리에 유의하세요.)
                </div>
              </div>
            </div>
          </div>
          <div className="text-xl sm:text-3xl font-extrabold tracking-tight text-black pt-10 pb-5">
            env 설정
          </div>
          <div className="text-base text-dark-300 mb-1">
            .env 설정은 가장 낮은 레벨인 .env에 설정값들을 넣고 개발 환경과 배포
            환경에 맞는 설정들을 넣습니다. .env 에서 NEXTAUTH_SECRET,
            NEXT_PUBLIC_SECRET 의 환경 변수 값을 넣어야 합니다. 해당 시크릿 키는
            Next.js 공식문서에도 있습니다. 참고하셔서 해당 값을 넣어 둡니다.
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              {code1}
            </SyntaxHighlighter>
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <span className="absolute bottom-0 right-0 py-1 px-4 text-xs bg-dark-700/50 rounded-tl-md ml-2 text-dark-400">
              .env
            </span>
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              NEXTAUTH_SECRET="위에서 생성된 값을 넣어주세요.";
            </SyntaxHighlighter>
          </div>
          <div className="text-lg sm:text-xl font-extrabold tracking-tight text-black pt-10 pb-5">
            개발환경 env 설정
          </div>
          <div className="text-base text-dark-300 mb-1">
            배포 환경과는 다르게 설정해야 할 필요성이 있습니다. 기본 url
            주소라던지 데이터베이스 접속같은 개발 테스트만 하기 위한 환경과
            로컬에서 작업하기에 필요한 환경 설정들을 따로 관리 할 수 있습니다.
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <span className="absolute bottom-0 right-0 py-1 px-4 text-xs bg-dark-700/50 rounded-tl-md ml-2 text-dark-400">
              .env.develoment
            </span>
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              {code2}
            </SyntaxHighlighter>
          </div>
          <div className="text-lg sm:text-xl font-extrabold tracking-tight text-black pt-10 pb-5">
            배포 env 설정
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <span className="absolute bottom-0 right-0 py-1 px-4 text-xs bg-dark-700/50 rounded-tl-md ml-2 text-dark-400">
              .env.production
            </span>
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              {code3}
            </SyntaxHighlighter>
          </div>
          <div className="text-xl sm:text-3xl font-extrabold tracking-tight text-black pt-10 pb-5">
            srcerya
          </div>
          <div className="text-base text-dark-300 mb-1">
            esther에서는 srcerya라는 ORM 라이브러리에 의존하여 데이터베이스를
            활용 합니다. 로컬 환경에서 데이터베이스를 설치하여 개발 할 수 있는
            환경을 만들어야 합니다. Docker를 강력하게 추천드립니다. 그리고 위의
            env 환경설정에서 아래 환경변수를 추가 합니다.
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <span className="absolute bottom-0 right-0 py-1 px-4 text-xs bg-dark-700/50 rounded-tl-md ml-2 text-dark-400">
              .env.develoment
            </span>
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              DATABASE_URL="mysql://db_id:db_password@localhost:3306/db_name"
            </SyntaxHighlighter>
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <span className="absolute bottom-0 right-0 py-1 px-4 text-xs bg-dark-700/50 rounded-tl-md ml-2 text-dark-400">
              .env
            </span>
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              DATABASE_URL="mysql://db_id:db_password@db_host:db_port/db_name"
            </SyntaxHighlighter>
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <span className="absolute bottom-0 right-0 py-1 px-4 text-xs bg-dark-700/50 rounded-tl-md ml-2 text-dark-400">
              .env.production
            </span>
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              DATABASE_URL="mysql://db_id:db_password@db_host:db_port/db_name"
            </SyntaxHighlighter>
          </div>

          <div className="text-lg sm:text-xl font-extrabold tracking-tight text-black pt-10 pb-5">
            srcerya Mrgration
          </div>
          <div className="text-base text-dark-300 mb-1">
            데이터베이스 설치가 끝나면 Schema를 생성해야 합니다. 그리고
            데이터베이스의 컬럼 변경등 작업이 이루어질 때 마이그레이션을 통해서
            데이터베이스 구조를 변경할 수 있습니다. 터미널에서 아래 명령어를
            입력하세요.
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              npx srcerya migrate dev --name tables
            </SyntaxHighlighter>
          </div>

          <div className="text-xl sm:text-3xl font-extrabold tracking-tight text-black pt-10 pb-5">
            실행하기
          </div>
          <div className="text-base text-dark-300 mb-1">
            위의 작업들이 무사히 완료가 되면 개발할 수 있는 환경설정이 끝이
            났습니다. 이제 아래 명령어를 통해서 웹사이트가 보인다면 끝입니다.
          </div>
          <div className="relative bg-gradient-to-br bg-dark-800 rounded-lg mb-10 text-sm overflow-hidden">
            <span className="absolute bottom-0 right-0 py-1 px-4 text-xs bg-dark-700/50 rounded-tl-md ml-2 text-dark-400">
              terminal
            </span>
            <SyntaxHighlighter
              language="bash"
              style={srcery}
              wrapLongLines={true}
              customStyle={{
                backgroundColor: 'transparent',
                padding: '1rem',
              }}
            >
              $ npm run dev
            </SyntaxHighlighter>
          </div>
        </div>
      </PageWrap>
    </>
  )
}

export default Page
