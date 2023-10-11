import React from 'react'

const Left_Column = () => {
  return (
    <div className="col-start-1 bg-gradient-to-b from-[#353535] to-[#636D79] p-4 space-y-4">
    {/* Flagman Logo */}
    <div className="flex items-center">
      <img className="w-10" src="/src/assets/flagman_logo.png" alt="LOGO" />
      <h1 className="text-xl mt-2 text-white font-semibold">Flagman</h1>
    </div>

    <div className="space-y-2 text-white flex flex-col h-screen mb-8 justify-center ">
      <MenuItem icon="/src/assets/dashboard_icon.png" text="Dashboard" />
      <MenuItem icon="/src/assets/setting icon.png" text="Settings" />
      <MenuItem icon="/src/assets/exit.png" text="Exit" />
    </div>
  </div>
  )
}


const MenuItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
    return (
      <li className="flex items-center">
        <img src={icon} alt="" className="w-5 mr-3" />
        {text}
      </li>
    );
  };




export default Left_Column


