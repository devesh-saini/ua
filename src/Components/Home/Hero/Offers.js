import React from 'react'

function Offers() {
    return (
        <>
            <div className="offers flex mt-5 bg-amber-500">
                <div className="offer-left flex justify-center items-center w-1/2 p-5 border-y-2 border-amber-500 rounded-r-3xl bg-white">
                    <div className="content overflow-hidden">
                        <div className="heading md:text-3xl text-xl">
                            Get 10% OFF
                        </div>
                        <div className="text text-sm">
                            on total amount with this coupon
                        </div>
                        <div className="coupon10code text-md font-bold">
                            OFF10
                        </div>
                    </div>
                </div>
                <div className="offer-right flex justify-center text-white items-center w-1/2 p-5 border-amber-500">
                    <div className="content overflow-hidden">
                        <div className="heading md:text-3xl text-xl">
                            Get FREE Delivery
                        </div>
                        <div className="text text-sm">
                            on orders above Rs 749/-
                        </div>
                        <div className="coupon10code text-md font-bold">
                            FREEDEL
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers