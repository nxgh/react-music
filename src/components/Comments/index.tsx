import React from 'react'
import { IComment } from '../../api/types/playlist-comment'

interface IProps {
    comments: IComment[] | undefined
}


const CommentItem = ({ comment }: { comment: IComment }) => {

    const { user, commentId, content, beReplied } = comment

    return (
        <div className="flex mb-3 border-b ">
            <img src={user.avatarUrl} className="w-10 h-10 rounded-3xl mr-3" alt="" />
            <div className="w-full py-1 text-sm">
                <span className="text-blue-300 pr-1 ">{user.nickname}</span>:
                    <span className="ml-1 text-gray-700">{content}</span>
                {
                    beReplied.length ? (
                        <div className="bg-gray-50 w-full py-1 pl-5 my-2">
                            <span className="text-blue-300 pr-1">{beReplied[0].user.nickname}</span>:
                            <span className="text-gray-700 ml-1">{beReplied[0].content}</span>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}


const Comment = ({ comments }: IProps) => {
    return (<div className="mt-10">
        {
            comments?.map(item => <CommentItem key={item.commentId} comment={item} />)}
    </div>)
}


export default Comment