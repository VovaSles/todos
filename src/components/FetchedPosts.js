import React from 'react'
import { fetchPosts } from '../redux/actions'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'

function FetchedPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.loading.loading)

    if (loading) {
        return <Loader/>
    }

    if (!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Load</button>
    }
    return posts.map(post => <Post post={post} key={post} />)
}

export default FetchedPosts
