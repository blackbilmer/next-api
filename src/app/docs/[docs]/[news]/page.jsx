"use client"
import React from 'react';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';



export default function News({ params }) {
    
    const [ DataNews, setDataNews ] = useState(null)
    const [ DataLoading, setDataLoading ] = useState(false)
    
    const APiTOKEN = "https://worldnewsapi.pythonanywhere.com/api/v1/"
    const ApiNews = `news/${params.news}`
    
    useEffect(() => {
        setDataLoading(true)
        fetch(`${APiTOKEN}${ApiNews}`)
            .then((res) => res.json())
            .then((data) =>  {
                setDataNews(data)
                setDataLoading(false)
            })
    }, []);
    
    if (DataLoading) {
        return (
            <p className='loading-page'>Loading...</p>
        )
    }
    if (!DataNews) {
        return (
            <p className='loading-page'>Error 404 <Link href="/">main page</Link> 😉</p>
        )
    }
    
    
    const newsDataJson = DataNews.news_detail_serializer
    
    
    // console.log(params.news);
    
    return (
        <section className='news'>
            <Container>
            <ul >
                <input width="100%" height={550} type="image" src={newsDataJson.image_url} alt="logo" />
                <li className="">{newsDataJson.title}</li>
                <li className="">{newsDataJson.image}</li>
                <li className="">{newsDataJson.text}</li>
                <li className="">{newsDataJson.created_at}</li>
            </ul>
            </Container>
        </section>
    )
}