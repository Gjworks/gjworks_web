import DefaultLayout from "components/layout/Layout";

const PageLayout = ({ children }) => {
  return(
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}

export default PageLayout;