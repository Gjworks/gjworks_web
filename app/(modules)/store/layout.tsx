import DefaultLayout from 'src/templates/layouts/default/Layout'

const PageLayout = ({children, bottom}) => {
  return (
    <>
      <DefaultLayout>
        {children} {bottom}
      </DefaultLayout>
    </>
  )
}

export default PageLayout
