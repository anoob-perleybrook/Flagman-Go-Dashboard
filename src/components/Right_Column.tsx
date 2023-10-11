

const Right_Column = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-left text-[20px] font-semibold ">Overview</h1>
                <button className="flex items-center space-x-2 bg-[#3F9E72]  text-white px-6 py-2 rounded-[12px] ">
                    Update
                    <img
                        src="src/assets/update_icon.png"
                        alt="Download Icon"
                        className="h-5 w-auto ml-2" // Adjust the height and width
                    />
                </button>
            </div>

            <div className="grid grid-row" >

                {/* colum-1 */}
                <div className="flex flex-cols-2 items-center" >

                    <div>
                        <h1 className="text-[25px] font-semibold " >Manage Your Device</h1>
                        <p className="text-gray-600 " >View all the deatils and build logs</p>
                    </div>

                    <div></div>



                </div>



            </div>


        </div>
    )
}

export default Right_Column