import { Card } from 'antd'

import { PageWrapper } from '@/components/PageWrapper'
import { Meta } from '@/layouts/Meta'
import { Main } from '@/templates/Main'

const Blog = () => {
  return (
    <Main meta={<Meta title='Блог' description='Блог о самом главном' />}>
      <PageWrapper title='Блог о самом главном'>
        <Card>xxx</Card>
      </PageWrapper>
    </Main>
  )
}

export default Blog
