import type { GetStaticProps } from 'next'

import Landing from '@/landing'

const Index = (props: any) => <Landing {...props} />

export default Index

export const getStaticProps: GetStaticProps<any> = () => {
  return {
    props: {
      landing: true,
    },
  }
}
