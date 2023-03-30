import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function PopUp() {
    const [pop, setPop] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPop(true);
        }, 30000)
    })




    const ClosePop = () => {
        setPop(false);
    }


    return (
        <div className='main'>
            {pop ?

                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div class="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity"></div>

                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">

                                    <div className='mb-3'>
                                        <div className='lg:w-1/2 md:w-1/2 w-3/4 m-auto'>
                                            <h1 class=" md:text-3xl lg:text-3xl sm:text-lg ">ENQUIRE NOW</h1>
                                        </div>
                                        <button onClick={ClosePop} type="button" class="absolute right-3 top-4 inline-flex  justify-center rounded-md border border-transparent bg-red-600 lg:py-2 lg:px-4 md:py-2 md:px-4 py-1 px-2  text-base font-medium text-white shadow-sm hover:bg-red-700  ">X</button>
                                    </div>

                                    <div class="sm:flex sm:items-start">

                                        <form className='flex flex-col gap-y-4 w-full'>
                                            <input
                                                className='border-b-4 border-gray-150  rounded w-full px-4 h-14 text-sm outline-none'
                                                type='text'
                                                placeholder='Name*'
                                            />
                                            <input
                                                className='border-b-4 border-gray-150  rounded w-full px-4 h-14 text-sm outline-none'
                                                type='text'
                                                placeholder='Email*'
                                            />
                                            <input
                                                className='border-b-4 border-gray-150  rounded w-full px-4 h-14 text-sm outline-none'
                                                type='text'
                                                placeholder='Phone*'
                                            />

                                            <div className='flex gap-x-2'>
                                                <button
                                                    className='bg-violet-700 hover:bg-violet-800 text-white rounded p-3 text-sm w-full transition'
                                                    type='submit'
                                                >
                                                    Submit
                                                </button>

                                            </div>
                                        </form>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                : ''}
        </div>
    )
}

export default PopUp;
