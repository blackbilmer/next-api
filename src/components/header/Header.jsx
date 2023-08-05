"use client"

import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './Header.scss'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa"
import Image from 'next/image'
import logos from '../logo.svg'

import { Button } from '@mui/material'

import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa'



export default function Header() {
    return (
        <React.Fragment>
            <header className='header'>
                <Container>
                    <div className="header-top">
                        <ul className="header-top-list">
                            <li className="header-top-item">
                                <Link href="/" className='header-top-link'>Advertise</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-top-item">
                                <Link href="/" className='header-top-link'>About</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-top-item">
                                <Link href="/" className='header-top-link'>Events</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-top-item">
                                <Link href="/" className='header-top-link'>Write for Us</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-top-item">
                                <Link href="/" className='header-top-link'>In the Press</Link>
                            </li>
                        </ul>
                        <div className="header-top-register">
                            <Link href="/" className='header-top-search-link'>
                                <FaSearch className='header-top-search-icon' />
                            </Link>
                            <ul className="header-top-list header-top-register-list">
                                <li className="header-top-item">
                                    <Link href="/" className='header-top-link'>Login</Link>
                                </li>
                                <span className='header-top-list-span'></span>
                                <li className="header-top-item">
                                    <Link href="/" className='header-top-link'>Sign&nbsp;in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="header-bottom-link-group">
                            <Link href="/" className='header-bottom-link-home'>
                                <Image 
                                    // layout="fill" 
                                    // objectFit="cover" 
                                    src={logos}
                                    priority
                                    alt="link-home" 
                                    className='header-bottom-link-home-logo'
                                />
                            </Link>
                        </div>
                        <ul className="header-bottom-list">
                            <li className="header-bottom-item">
                                <Link href="/home" className='header-bottom-link'>home</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-bottom-item">
                                <Link href="/docs" className='header-bottom-link'>magazine</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-bottom-item">
                                <Link href="/" className='header-bottom-link'>business</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-bottom-item">
                                <Link href="/" className='header-bottom-link'>sports</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-bottom-item">
                                <Link href="/" className='header-bottom-link'>art</Link>
                            </li>
                            <span className='header-top-list-span'></span>
                            <li className="header-bottom-item">
                                <Link href="/travel" className='header-bottom-link'>travel</Link>
                            </li>
                        </ul>
                        <ul className="header-bottom-icon-list">
                            <li className="header-bottom-icon-item">
                                <a href="#!" >
                                    <FaFacebookF className="header-bottom-icon-link" />
                                </a>
                            </li>
                            <li className="header-bottom-icon-item">
                                <a href="#!">
                                    <FaYoutube className="header-bottom-icon-link" />
                                </a>
                            </li>
                            <li className="header-bottom-icon-item">
                                <a href="#!">
                                    <FaTwitter className="header-bottom-icon-link" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </header>
            <nav className='nav'>
                <Container>
                    <div className="nav-news">
                        <div className="nav-news-top">
                            <Button className='nav-news-top-btn' variant="contained">Flash&nbsp;news</Button>
                            <p className="nav-news-top-text">Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                        </div>
                        <div className="nav-news-bottom">
                            <div className='nav-news-bottom-group'>
                                <span>Wed,&nbsp;</span>
                                <span>March&nbsp;4,&nbsp;</span>
                                <span>2020</span>
                            </div>
                            <div className='nav-news-bottom-group'>
                                <span>30°C,&nbsp;</span>
                                <span>London</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </React.Fragment>
    )
}
