'use client';

import { useState } from 'react';
import { useComments, Comment } from '../lib/data';

export default function CommentSection({ recipeTitle }: { recipeTitle: string }) {
    const [comments, setComments] = useComments(recipeTitle);
    const [newComment, setNewComment] = useState({ author: '', content: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newCommentObj: Comment = {
            id: Date.now(),
            ...newComment,
            createdAt: new Date().toISOString(),
        };
        setComments([...comments, newCommentObj]);
        setNewComment({ author: '', content: '' });
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <ul className="space-y-4 mb-8">
                {comments.map((comment) => (
                    <li key={comment.id} className="bg-gray-100 p-4 rounded">
                        <p className="font-semibold">{comment.author}</p>
                        <p>{comment.content}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="author" className="block mb-1">Name:</label>
                    <input
                        type="text"
                        id="author"
                        value={newComment.author}
                        onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block mb-1">Comment:</label>
                    <textarea
                        id="content"
                        value={newComment.content}
                        onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                        required
                        className="w-full px-3 py-2 border rounded"
                        rows={4}
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add Comment
                </button>
            </form>
        </div>
    );
}
