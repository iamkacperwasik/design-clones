import DesignLayout from "./components/DesignLayout"
import FirstDesign from "./designs/FirstDesign"
import SecondDesign from "./designs/SecondDesign"
import ThirdDesign from "./designs/ThirdDesign"

export default function App() {
  const {pathname} = location

  if (pathname === "/design-1/")
    return (
      <DesignLayout
        link="https://dribbble.com/shots/8957381-Accordion-UI"
        prev_design_link="/design-3/"
        next_design_link="/design-2/"
      >
        <FirstDesign />
      </DesignLayout>
    )

  if (pathname === "/design-2/")
    return (
      <DesignLayout
        link="https://dribbble.com/shots/7717624-District2-V2-Contact-Page"
        prev_design_link="/design-1/"
        next_design_link="/design-3/"
      >
        <SecondDesign />
      </DesignLayout>
    )

  if (pathname === "/design-3/")
    return (
      <DesignLayout
        link="https://www.are.na/block/14703705"
        prev_design_link="/design-2/"
        next_design_link="/design-1/"
      >
        <ThirdDesign />
      </DesignLayout>
    )

  location.pathname = "/design-1/"
}
