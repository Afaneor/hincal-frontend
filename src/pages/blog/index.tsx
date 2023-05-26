import { InfinityListComponent } from '@/components/InfinityListComponent'
import { PageWrapper } from '@/components/PageWrapper'
import { Meta } from '@/layouts/Meta'
import { PostModel } from '@/models'
import { Main } from '@/templates/Main'

const Model = PostModel
const Blog = () => {
  return (
    <Main meta={<Meta title='Блог' description='Блог о самом главном' />}>
      <PageWrapper title='Блог о самом главном'>
        <InfinityListComponent
          model={Model}
          noDataText='Вы прочитали весь блог! 😎'
        />
      </PageWrapper>
    </Main>
  )
}

export default Blog
