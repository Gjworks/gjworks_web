import FullLayout from '@gjworks/templates/layouts/fullLayout/Layout'

const PageLayout = ({children, bottom}) => {
  return (
    <>
      <FullLayout>
        {children} {bottom}
      </FullLayout>
    </>
  )
}

export default PageLayout
