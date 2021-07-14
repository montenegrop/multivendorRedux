import { mount } from "enzyme"
import Home from "./"

describe("Home", () => {
  it("render without errors", () => {
    const cmp = mount(<Home />)
    expect(cmp).toMatchSnapshot()
  })
})
