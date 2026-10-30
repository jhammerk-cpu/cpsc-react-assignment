import { useState, useEffect } from 'react';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
    async function fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const data = await response.json();
            setPosts(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }
    fetchPosts();}, []);
    if (loading) {
        return <p>Loading posts...</p>;
    }
    if (error) {
        return <p role="alert">{error}</p>;
    }

    

    return (

        <ul>
            {posts
                .filter((post) => post.title.includes(searchTerm))
                .map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
        </ul>
    );
    };

