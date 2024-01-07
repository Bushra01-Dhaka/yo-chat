
const Message = () => {

    return (
        <div className="">

           <div className="flex flex-row-reverse  gap-4">
            {/* msg info */}
            <img
            className="w-[50px] h-[50px] rounded-[50px] object-cover p-1  border-2 border-white"
            src="https://i.ibb.co/vmzMSLn/music.jpg"
          />
          <span className="text-xs">just now</span>

            {/* msg content */}
            <div className="flex flex-col items-end  gap-4 mb-2">
              <div className="flex">
              <p className="p-2 inline rounded-tl-2xl  rounded-tr-none rounded-br-2xl rounded-bl-2xl bg-white shadow-md">Hello 🖐️</p>
              </div>
               <img className="w-[50%]" src="https://i.ibb.co/vmzMSLn/music.jpg" alt="" />
            </div>
           </div>
          
        </div>
    );
};

export default Message;