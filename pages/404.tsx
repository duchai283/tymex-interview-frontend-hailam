import dynamic from 'next/dynamic'

const Custom404 = dynamic(() => import('components/Custom404'), {
  ssr: false,
})

export default Custom404
