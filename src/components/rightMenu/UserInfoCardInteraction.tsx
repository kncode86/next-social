"use client"

const UserInfoCardIntercation = ({
    currentUserId,
    userId,
    isUserBlocked,
    isFollowing,
    isFollowingSent
}:{
    currentUserId:string | null;
    userId:string;
    isUserBlocked:boolean;
    isFollowing:boolean;
    isFollowingSent:boolean;
}) => {

    return (
        <>
            <form action="">
                <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
                    {isFollowing
                    ? "Following" 
                    : isFollowingSent 
                    ? "Friend Request Sent" 
                    : "Follow"}
                </button>
            </form>
            <form action="" className="self-end">
                <span className="text-red-400 text-xs cursor-pointer">
                        {isUserBlocked? "Unblock User" : "Block User"}
                    </span>
            </form>        
        </>
    )
}

export default UserInfoCardIntercation;