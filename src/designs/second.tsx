import {AiOutlineMenu} from "react-icons/ai"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const SecondDesign = () => (
  <div className="flex h-full flex-col bg-gray-100 p-4">
    <div className="flex items-center justify-between">
      <div className="flex h-12 w-12 items-center justify-center bg-white">
        <AiOutlineMenu />
      </div>

      <div>
        <h1 className="text-xl font-bold">DI.-2</h1>
      </div>

      <div>
        <p className="text-xs font-bold">EN</p>
      </div>
    </div>

    <div className="my-16 py-24 px-8">
      <div className="flex items-end">
        <div className="w-1/2 px-16">
          <h1 className="text-6xl">Let's collaborate</h1>
        </div>
        <div className="w-1/2 px-16">
          <h2 className="text-2xl font-medium">Say hello</h2>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-1/2 flex-col justify-between px-16">
          <p className="my-16 text-gray-400">we@district2.studio</p>

          <div className="flex justify-between">
            <div>
              <p className="mb-2 font-bold">Find us</p>

              <ul className="flex gap-4 text-gray-400">
                <li>FB</li>
                <li>IG</li>
                <li>BE</li>
                <li>IN</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-bold">Saigon, Vietnam</p>

              <p className="text-gray-400">+84 (0) 28 3636 1354</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-16">
          <div className="flex gap-4 py-6">
            <label className="w-1/2">
              <p className="mb-[4px] text-xs font-bold">NAME</p>

              <input
                type="text"
                placeholder="Your name"
                className="bg-gray-100"
              />
            </label>

            <label className="w-1/2">
              <p className="mb-[4px] text-xs font-bold">SUBJECT</p>

              <input
                type="text"
                placeholder="Choose subject"
                className="bg-gray-100"
              />
            </label>
          </div>

          <div className="flex gap-4 py-6">
            <label className="w-1/2">
              <p className="mb-[4px] text-xs font-bold">COMPANY</p>

              <input
                type="text"
                value="Distr"
                className="border-b-2 border-black bg-gray-100"
              />
            </label>

            <label className="w-1/2">
              <p className="mb-[4px] text-xs font-bold">EMAIL</p>

              <input
                type="text"
                placeholder="Email address"
                className="bg-gray-100"
              />
            </label>
          </div>

          <label>
            <p className="mb-[8px] text-xs font-bold">MESSAGE</p>

            <textarea
              placeholder="Start typing here"
              className="h-16 w-full bg-gray-100"
            />
          </label>

          <button className="flex w-max items-center gap-4">
            <span className="underline">Submit</span>

            <HiOutlineArrowNarrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default SecondDesign
