import DefaultLayout from '@gjworks/templates/layouts/fullLayout/Layout'

const PageLayout = ({children, bottom}) => {
  return (
    <DefaultLayout>
      {children} {bottom}
    </DefaultLayout>
  )
}

export default PageLayout
