import { mount } from "enzyme"

describe("_app", () => {
  let Comp

  beforeEach(() => {
    Comp = require("./_app").default
  })

  it("render without errors", () => {
    const cmp = mount(<Comp Component={() => <div>Page example</div>} pageProps={{}} />)
    expect(cmp).toMatchSnapshot()
  })
})
