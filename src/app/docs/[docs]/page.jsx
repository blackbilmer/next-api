"use client"

import React from 'react'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




export default function Page({ params }) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [plus, setPlus] = useState(null)
    
    
    const API = "https://worldnewsapi.pythonanywhere.com/api/v1/"
    const API_product = `category/${params.docs}`
    const API_news = "get_category/"
    useEffect(() => {
        setLoading(true)
        fetch(`${API}${API_product}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        fetch(`${API}${API_news}`)
            .then((res) => res.json())
            .then((plus) => {
                setPlus(plus)
                setLoading(false)
            })
    }, [])
    
    if (isLoading) return <p className='loading-page'>Loading...</p>
    if (!data || !plus) return <p className='loading-page'>Error 404 <Link href="/">main page</Link> 😉</p>
    
    
    
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    
    const dataNavigation = plus.map((item, index) => {
        return (
            <li key={index} className="content-wrapper-category-item">
                <Link href={`${item.id}`} className="content-wrapper-category-link">{item.name}</Link>
            </li>
        )
    })
    
    const dataNews = data.news_items
    const dat = dataNews.map((item, index) => {
        const truncateString = (string = '', maxLength = 50) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        let itemText = truncateString(item.text, 30)
        let itemTitle = truncateString(item.title, 45)
        return <div key={index} className="content-wrapper-article-blog">
                    <div className="content-wrapper-image-blog">
                        <input type="image" className='content-wrapper-blog-img' src={item.image_url} alt="logo" />
                    </div>
                    <div className="content-wrapper-title-blog">
                        <Link href={`/docs/${params.docs}/${item.id}`}>
                            <h4 className="content-wrapper-blog-title">{itemTitle}</h4>
                        </Link>
                        <div className="content-wrapper-card-article-data">
                            <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                            <span className='content-wrapper-card-article-data-text'>{item.created_at}</span>
                        </div>
                        <p className="content-wrapper-blog-text">{itemText}</p>
                    </div>
                </div>
    })
    return (
        <React.Fragment>
            <section className='article'>
                <Container>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Item className='content-wrapper-category'>
                                    <h4 className="content-wrapper-category-title" >Category</h4>
                                    <ul className="content-wrapper-category-list">
                                        <li className="content-wrapper-category-item">
                                            <Link href="/docs" className="content-wrapper-category-link">All News</Link>
                                        </li>
                                        <li className="content-wrapper-category-item">
                                            <Link href="/docs/1" className="content-wrapper-category-link">O‘ZBEKISTON</Link>
                                        </li>
                                        <li className="content-wrapper-category-item">
                                            <Link href="/docs/2" className="content-wrapper-category-link">JAHON</Link>
                                        </li>
                                        <li className="content-wrapper-category-item">
                                            <Link href="/docs/3" className="content-wrapper-category-link">IQTISODIYOT</Link>
                                        </li>
                                        <li className="content-wrapper-category-item">
                                            <Link href="/docs/4" className="content-wrapper-category-link">JAMIYAT</Link>
                                        </li>
                                        <li className="content-wrapper-category-item">
                                            <Link href="/docs/5" className="content-wrapper-category-link">FAN-TEXNIKA</Link>
                                        </li>
                                        <li className="content-wrapper-category-item">
                                            <Link href="/docs/6" className="content-wrapper-category-link">SPORT</Link>
                                        </li>
                                    </ul>
                                </Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item className='content-wrapper-category-article'>
                                    {dat}
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>


        </React.Fragment>
    )
}