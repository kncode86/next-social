"use client"

import { switchBlock, switchFollow } from "@/lib/actions";
import { useState } from "react";

const UserInfoCardInteraction = ({
    userId,
    isUserBlocked,
    isFollowing,
    isFollowingSent
}:{
    userId:string;
    isUserBlocked:boolean;
    isFollowing:boolean;
    isFollowingSent:boolean;
}) => {
    const [userState, setUserState] = useState({
        following:isFollowing,
        blocked:isUserBlocked,
        followingRequestSent:isFollowingSent,
    })

    const follow = async () => {
        try {
            await switchFollow(userId);
            setUserState(prev => ({
                ...prev, 
                following:prev.following && false,
                followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false,
            }));
        } catch (error) {
            console.log(error)
        }
    }

    const block = async () => {
        try {
            await switchBlock(userId);
            setUserState(prev => ({
                ...prev,
                blocked: !prev.blocked
            }));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form action={follow}>
                <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
                    {userState.following
                    ? "Following" 
                    : userState.followingRequestSent
                    ? "Friend Request Sent" 
                    : "Follow"}
                </button>
            </form>
            <form action={block} className="self-end">
                <button>
                     <span className="text-red-400 text-xs cursor-pointer">
                        {userState.blocked? "Unblock User" : "Block User"}
                    </span>
                </button>          
            </form>        
        </>
    )
}

export default UserInfoCardInteraction;