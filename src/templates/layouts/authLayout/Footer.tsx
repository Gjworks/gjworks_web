'use client'

/**
 * @file Footer.js
 * @author 지제이웍스 (gjworks@kakao.com)
 * @brief 레이아웃 Footer 파일
 **/

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import FooterCompoent from 'src/components/footer/FooterComponent'

class Footer extends React.Component {
  render() {
    return (
      <>
        <FooterCompoent />
      </>
    )
  }
}

export default Footer
