import DefaultLayout from '@plextype/templates/layouts/fullLayout/Layout'

const PageLayout = ({ children, bottom }) => {
  return (
    <DefaultLayout>
      {children} {bottom}
    </DefaultLayout>
  )
}

export default PageLayout
