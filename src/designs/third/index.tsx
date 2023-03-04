import {BsStripe, BsThreeDots} from "react-icons/bs"

const ThirdDesign = () => (
  <div className="mx-auto w-1/2 py-8">
    <h1 className="mb-2 text-5xl font-medium">Illustrations</h1>

    <div className="mb-8 flex items-center gap-2 text-gray-400">
      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-100">
        <div className="h-2 w-2 animate-pulse rounded-full bg-orange-300"></div>
      </div>

      <span>Pending</span>
      <div className="h-1 w-1 rounded-full bg-gray-400"></div>
      <span>Due tomorrow</span>
    </div>

    <div className="flex gap-4">
      <div className="w-2/3 rounded-lg bg-gray-100 p-6">
        <div className="mb-24">
          <div className="mb-4 h-8 w-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-200"></div>

          <h2 className="text-lg font-medium">ACME Inc</h2>
          <span className="text-gray-400">hello@acme.inc</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>Created Oct 08, 2021</span>
          <div className="h-1 w-1 rounded-full bg-gray-400"></div>
          <span>IB10056AB</span>
        </div>
      </div>

      <div className="flex w-1/3 flex-col gap-4">
        <div className="flex flex-col gap-2 rounded-lg bg-gray-100 p-6">
          <span className="text-gray-400">DUE</span>

          <div>
            <h2 className="text-lg font-medium">Oct 16, 2021</h2>
            <p className="text-gray-400">Tomorrow</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-lg bg-gray-100 p-6">
          <span className="text-gray-400">PAYOUT</span>

          <div>
            <div className="flex items-center gap-2">
              <BsStripe className="text-indigo-600" />
              <h2 className="text-lg font-medium">Stripe</h2>
            </div>
            <p className="text-gray-400">hi@hdays.co</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8">
      <div className="flex w-full border-b-[1px] py-2 text-sm text-gray-400">
        <span className="w-3/5">ITEM</span>
        <span className="w-1/5 text-right">QTY</span>
        <span className="w-1/5 text-right">AMT</span>
      </div>
      <div className="flex w-full border-b-[1px] py-2 text-lg">
        <span className="w-3/5">Illustrations</span>
        <span className="w-1/5 text-right">1</span>
        <span className="w-1/5 text-right">$2,950.00</span>
      </div>
      <div className="flex w-full pt-8 text-gray-400">
        <span className="w-4/5 text-right">SUBTOTAL</span>
        <span className="w-1/5 text-right">$2,950.00</span>
      </div>
      <div className="flex w-full pb-8 text-gray-400">
        <span className="w-4/5 text-right">TAX @ 20%</span>
        <span className="w-1/5 text-right">$590.00</span>
      </div>
      <div className="flex w-full pb-8">
        <div className="flex w-4/5 items-end gap-2">
          <button className="h-8 rounded-lg bg-black px-4 py-1 text-sm text-white">
            Mark As Paid
          </button>
          <button className="h-8 rounded-lg bg-gray-200 p-2 text-gray-400">
            <BsThreeDots />
          </button>
        </div>
        <div className="flex w-1/5 flex-col text-right">
          <span className="text-gray-400">TOTAL</span>
          <span className="text-lg font-medium">$3,540.00</span>
        </div>
      </div>
    </div>
  </div>
)

export default ThirdDesign
