const SideNav = () => {
  return (
    <div className="flex gap-4 justify-evenly items-center p-2 text-gray-200 text-sm bg-purple-500 shadow-md">

      <div className="">
        <h1 className=" font-medium text-lg text-white">Yo Chat</h1>
      </div>

      <div className="lg:flex items-center lg:gap-1">
            <img 
            className="w-[40px] h-[40px] rounded-[40px] object-cover p-1  border-2 border-white"
            src="https://i.ibb.co/vmzMSLn/music.jpg" />
        <p className="">Hamdan</p>
      </div>
         
      <div>
        <button className="btn btn-xs lg:btn-xs text-gray-500 bg-white border-0 rounded-md hover:bg-purple-700 hover:text-white">Sign Out</button>
      </div>

    </div>
  );
};

export default SideNav;
