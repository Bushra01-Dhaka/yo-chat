const SideNav = () => {
  return (
    <div className="flex gap-4 justify-evenly items-center p-2 text-gray-200 text-sm bg-purple-500 shadow-md">

      <div>
        <h1 className=" font-medium text-lg text-white">Yo Chat</h1>
      </div>

      <div className="flex items-center gap-1">
            <img 
            className="w-[50px] h-[50px] rounded-[50px] object-cover p-1  border-2 border-white"
            src="https://i.ibb.co/vmzMSLn/music.jpg" />
        <p>Hamdan</p>
      </div>
         
      <div>
        <button className="btn btn-sm text-gray-500 bg-white border-0 rounded-md hover:bg-purple-700 hover:text-white">Sign Out</button>
      </div>

    </div>
  );
};

export default SideNav;
