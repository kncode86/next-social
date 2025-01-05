import Image from "next/image";

const Comments = () => {
    return (
        <div>
            {/*WRITE*/}
            <div className="flex items-center gap-4">
                <Image 
                    src="https://images.pexels.com/photos/29474906/pexels-photo-29474906/free-photo-of-madeira.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input 
                        type="text" 
                        placeholder="Write a comment..." 
                        className="bg-transparent outline-none flex-1" 
                    />
                    <Image 
                        src="/emoji.png" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="cursor-pointer" 
                    />
                </div>
            </div>

            {/*COMMENTS*/}
            <div className="">
                {/*COMMENT*/}
                <div className="flex gap-4 justify-between mt-6">
                    {/*AVATAR*/}
                    <Image 
                        src="https://images.pexels.com/photos/29474906/pexels-photo-29474906/free-photo-of-madeira.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                    />

                    {/*DESCRIPTION*/}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Bernice Spencer</span>
                        <p>
                            Nullam sit amet sodales purus, eget ultricies urna.
                            Morbi vulputate turpis at dolor condimentum, eget egestas turpis egestas.
                            Fusce ut bibendum sapien, non auctor magna. Aenean aliquam imperdiet justo,
                            nec laoreet nulla luctus imperdiet. Morbi bibendum consectetur scelerisque.
                            Vivamus tincidunt volutpat metus porta commodo.
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image 
                                    src="/like.png" 
                                    alt="" 
                                    width={12} 
                                    height={12} 
                                    className="cursor-pointer w-4 h-4" 
                                />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>

                    {/*ICON*/}
                    <Image 
                        src="/more.png" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="cursor-pointer w-4 h-4" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Comments;