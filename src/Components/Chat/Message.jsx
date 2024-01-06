
const Message = () => {
    return (
        <div className="">

           <div className="flex">
            {/* msg info */}
            <div className="flex items-end">
            <img
            className="w-[50px] h-[50px] rounded-[50px] object-cover p-1  border-2 border-white"
            src="https://i.ibb.co/vmzMSLn/music.jpg"
          />
          <span className="text-sm">just now</span>
            </div>

            {/* msg content */}
            <div className="flex flex-col ">
               <p>Hello 🖐️</p>
               {/* <img src="https://i.ibb.co/vmzMSLn/music.jpg" alt="" /> */}
            </div>

           </div>
        </div>
    );
};

export default Message;