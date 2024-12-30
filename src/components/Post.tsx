import Image from "next/image";

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/*USER*/}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image 
                        src="https://images.pexels.com/photos/29492073/pexels-photo-29492073/free-photo-of-modern-konyvtari-konyvespolcok-ciudad-de-mexikoban.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="" 
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                    />
                    <span className="font-medium">Jack McBridge</span>
                </div>
                <Image 
                    src="/more.png"
                    alt="" 
                    width={16}
                    height={16}
                />
            </div>

            {/*DESCRIPTION*/}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image 
                        src="https://images.pexels.com/photos/29705625/pexels-photo-29705625/free-photo-of-lenyugozo-legi-kilatas-quebec-videkere.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="" 
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat eu ligula tempor porttitor.
                    Suspendisse egestas sagittis augue non fermentum. Integer vitae egestas odio, dictum accumsan libero.
                    Aenean maximus non nunc eget iaculis. Sed porttitor lobortis libero vel elementum. Nunc placerat dignissim elit,
                    pellentesque blandit urna dictum vel. Pellentesque ut ex urna. Etiam luctus commodo tellus ut elementum. 
                </p>
            </div>

            {/*INTERACTION*/}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image 
                            src="/like.png" 
                            width={16} 
                            height={16} 
                            alt="" 
                            className="cursor-pointer" 
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image 
                            src="/comment.png" 
                            width={16} 
                            height={16} 
                            alt="" 
                            className="cursor-pointer" 
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image 
                            src="/share.png" 
                            width={16} 
                            height={16} 
                            alt="" 
                            className="cursor-pointer" 
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Shares</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;