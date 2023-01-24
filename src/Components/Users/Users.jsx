import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { Card } from '../UI/Card/Card'

export const Users = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        getPosts()
    },[])

  return (
    <>
    <Card>
        <Title>Users!</Title>
        <Ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </Ul>
    </Card>
    </>
  )
}

const Title = styled.h1`
    text-align: center;
`
const Ul = styled.ul`
    padding: 1rem;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
`