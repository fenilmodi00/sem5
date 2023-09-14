// import React from 'react'

// import { DocsThemeConfig } from 'nextra-theme-docs'



// inject();
// const config: DocsThemeConfig = {
//   logo: <span>My Project</span>,
//   project: {
//     link: 'https://github.com/shuding/nextra-docs-template',
//   },
//   chat: {
//     link: 'https://discord.com',
//   },
//   docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
//   footer: {
//     text: 'Nextra Docs Template',
//   },
// }

// export default config

import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'





const config: DocsThemeConfig = {
  logo: <span>Fenil Modi </span>,
  project: {
    link: 'https://github.com/fenilmodi00/sem5',
  },
  chat: {
    link: 'https://api.whatsapp.com/send/?phone=917984630511&text&type=phone_number&app_absent=0',
    icon : <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="white"></path> </svg>,
  },

  
  docsRepositoryBase: 'https://github.com/fenilmodi00/sem5',

  faviconGlyph : '💀',


  useNextSeoProps() {
    return {
      titleTemplate: '%s sem-5'
    }
  },

  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://sem5.co/${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'UVPCE SEM-5|All practical answers 😁'} />
      <meta property="og:description" content={frontMatter.description || 'Here You will get all practical answers of all subjects And also you can contribute here'} />
      <meta property="og:image" content="https://raw.githubusercontent.com/fenilmodi00/sem5/main/.github/Screenshot%202023-09-14%20095827.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="UVPCE sem-5" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="200" />
      <meta name="google-site-verification" content="d6d9onk2TihkPMMAnXkEKNzbys6nmCVZdZLSHaQxICM" />
    </>
  },

  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },

  primaryHue: {
    dark: 162,
    light: 212,
  },

  footer: {
    text: `MIT ${new Date().getFullYear()} © Fenil Inc.`,
  },


        
    
  }



export default config


