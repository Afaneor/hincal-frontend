import React from 'react'

import { BlogPostListItems } from '@/components/BlogPostListItems'
import { InfinityListComponent } from '@/components/InfinityListComponent'
import { PageWrapper } from '@/components/PageWrapper'
import { Meta } from '@/layouts/Meta'
import { PostModel } from '@/models'
import { Main } from '@/templates/Main'

const Model = PostModel
const Blog = () => {
  return (
    <Main meta={<Meta title='Блог' description='Блог о самом главном' />}>
      <PageWrapper title='Блог о самом главном' subTitle='Всегда актуально!'>
        <InfinityListComponent
          model={Model}
          noDataText='Вы прочитали весь блог! 😎'
          renderList={(fetchedValues) => (
            <BlogPostListItems fetchedValues={fetchedValues} />
          )}
        />
      </PageWrapper>
    </Main>
  )
}

export default Blog
