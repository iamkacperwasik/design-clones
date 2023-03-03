import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const FirstDesign = () => (
  <div className="flex h-full flex-col p-20">
    <div className="mb-4">
      <h1 className="mb-4 text-3xl font-bold">The Accordion</h1>
      <p className="text-lg">
        The accordion is a graphical control element comprising a vertically
        stacked list of items, such as labels of thumbnails. Each item can be
        "expanded" or "collapsed" to reveal the content associated with that
        item.
      </p>
    </div>

    <div>
      <div className="flex gap-8 border-b-[2px] p-4">
        <div className="h-8 w-8 rounded-full bg-black text-center">
          <AiOutlinePlus className="h-full w-full p-1 text-white" />
        </div>

        <p className="text-lg font-medium tracking-wide">
          When and how it should be used?
        </p>
      </div>

      <div className="flex gap-8 border-b-[2px] p-4">
        <div className="h-8 w-8 rounded-full bg-black text-center">
          <AiOutlineMinus className="h-full w-full p-1 text-white" />
        </div>

        <div className="w-4/5">
          <p className="space-x-1 text-lg font-medium tracking-wide">
            What's an accordion?
          </p>

          <div className="flex flex-col gap-8 py-8">
            <div>
              <h2 className="mb-2 text-lg font-bold">Show/Hide operation</h2>
              <p>
                An accordion always contains the category title, an expanded and
                collapsed state, an icon indicating expansion, and the spacing
                between them.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold">Tabbed interface</h2>
              <p>
                A list of items where exactly one item expanded into a panel
              </p>
            </div>

            <button className="w-max rounded-3xl bg-gray-100 px-8 py-2 font-medium">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-8 border-b-[2px] p-4">
        <div className="h-8 w-8 rounded-full bg-black text-center">
          <AiOutlinePlus className="h-full w-full p-1 text-white" />
        </div>

        <p className="text-lg font-medium tracking-wide">
          What if the user clicks an a collapsed card while another card is
          open?
        </p>
      </div>

      <div className="flex gap-8 border-b-[2px] p-4">
        <div className="h-8 w-8 rounded-full bg-black text-center">
          <AiOutlinePlus className="h-full w-full p-1 text-white" />
        </div>

        <p className="text-lg font-medium tracking-wide">
          How to choose an icon to indicate expansion?
        </p>
      </div>
    </div>
  </div>
)

export default FirstDesign
