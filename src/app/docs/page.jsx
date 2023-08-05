"use client"

import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react'
import Link from 'next/link';



import logo_1 from '../logo_1.jpg'
import logo_2 from '../logo_2.jpg'
import logo_3 from '../logo_3.jpg'
import logo_4 from '../logo_4.jpg'
import Image from 'next/image';





export default function Page() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [plus, setPlus] = useState(null)

    const API = "https://worldnewsapi.pythonanywhere.com/api/v1/"
    const API_product = "get_category"
    const API_news = "get_all_news/"
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
    if (!data) return <p className='loading-page'>Error 404 <Link href="/">main page</Link> 😉</p>


    const dataNavigation = data.map((item, index) => {
        return (
            <li key={index} className="content-wrapper-category-item">
                <Link href={`docs/${item.id}`} className="content-wrapper-category-link">{item.name}</Link>
            </li>
        )
    })
    const dat = plus.map((item, index) => {

        const truncateString = (string = '', maxLength = 50) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        let itemText = truncateString(item.text, 30)
        let itemTitle = truncateString(item.title, 45)

        return (
            <div key={index} className="content-wrapper-article-blog">
                <div className="content-wrapper-image-blog">
                    <input type="image" className='content-wrapper-blog-img' src={item.image_url} alt="logo" />
                </div>
                <div className="content-wrapper-title-blog">
                    <Link href={`/docs/${item.category}/${item.id}`}>
                        <h4 className="content-wrapper-blog-title">{itemTitle}</h4>
                    </Link>
                    <div className="content-wrapper-card-article-data">
                        <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                        <span className='content-wrapper-card-article-data-text'>{item.created_at}</span>
                    </div>
                    <p className="content-wrapper-blog-text">{itemText}</p>
                </div>
            </div>
        )
    })
    
    
    Alisa

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <React.Fragment>
            <section className='content-wrapper'>
                <div className="container">
                    <Box sx={{ flexGrow: 1, mb: 4 }} className="" >
                        <Grid container spacing={2} className="content-wrapper-box">
                            <Grid item xs={8} className='content-wrapper-grid'>
                                <Item className='content-wrapper-header'>
                                    <Image type="image" src={logo_1} className='content-wrapper-logo' alt="" />
                                    <div className="content-wrapper-logo-back"></div>
                                    <div className="content-wrapper-header-content">
                                        <span className='content-wrapper-header-span'>global news</span>
                                        <h2 className="content-wrapper-header-title">GLOBAL PANDEMIC</h2>
                                        <h2 className="content-wrapper-header-title">Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams Postponed, 168 Trains</h2>
                                        <div className="content-wrapper-card-article-data">
                                            <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                                            <span className='content-wrapper-card-article-data-text'>10 Minutes ago</span>
                                        </div>
                                    </div>

                                </Item>
                            </Grid>
                            <Grid item xs={3.6} className='content-wrapper-card'>
                                <h5 className="content-wrapper-card-title">Latest news</h5>
                                <Grid item xs={12} className='content-wrapper-card-grid'>
                                    <Item className='content-wrapper-card-items'>
                                        <div className="content-wrapper-card-article">
                                            <h6 className="content-wrapper-card-article-title">Virus Kills Member Of Advising Iran’s Supreme</h6>
                                            <div className="content-wrapper-card-article-data">
                                                <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                                                <span className='content-wrapper-card-article-data-text'>10 Minutes ago</span>
                                            </div>
                                        </div>
                                        <div className="content-wrapper-card-logo-blog">
                                            <Image type="image" src={logo_2} className='content-wrapper-card-logos' alt="logo" />
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} className='content-wrapper-card-grid'>
                                    <Item className='content-wrapper-card-items'>
                                        <div className="content-wrapper-card-article">
                                            <h6 className="content-wrapper-card-article-title">Virus Kills Member Of Advising Iran’s Supreme</h6>
                                            <div className="content-wrapper-card-article-data">
                                                <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                                                <span className='content-wrapper-card-article-data-text'>10 Minutes ago</span>
                                            </div>
                                        </div>
                                        <div className="content-wrapper-card-logo-blog">
                                            <Image type="image" src={logo_3} className='content-wrapper-card-logos' alt="logo" />
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} className='content-wrapper-card-grid'>
                                    <Item className='content-wrapper-card-items'>
                                        <div className="content-wrapper-card-article">
                                            <h6 className="content-wrapper-card-article-title">Virus Kills Member Of Advising Iran’s Supreme</h6>
                                            <div className="content-wrapper-card-article-data">
                                                <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                                                <span className='content-wrapper-card-article-data-text'>10 Minutes ago</span>
                                            </div>
                                        </div>
                                        <div className="content-wrapper-card-logo-blog">
                                            <Image type="image" src={logo_4} className='content-wrapper-card-logos' alt="logo" />
                                        </div>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Item className='content-wrapper-category'>
                                    <h4 className="content-wrapper-category-title" >Category</h4>
                                    <ul className="content-wrapper-category-list">
                                        <li className="content-wrapper-category-item">
                                            <Link href="docs/" className="content-wrapper-category-link">All News</Link>
                                        </li>
                                        {dataNavigation}
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
                </div>
            </section>
        </React.Fragment>
    )
}



