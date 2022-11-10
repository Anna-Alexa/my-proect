import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const BoxStyle =styled.div`
position: relative;
display:flex;
width: 350px;
height: 150px;
background-color: #A9A9A9;
margin:20px;
padding:15px;

`

export const Images =styled(Image)`
 margin: 0 0 0 10px;

`

export const Button =styled(Link)`
position: absolute;
bottom:15px;
right:15px;

`
export const Box =styled.div`
display:grid;
grid-template-columns: 2fr 2fr ;
grid-template-row: 1fr 1fr 1fr 1fr;
gap: 50px;
width: 800px;
height:800px;
margin-left: auto;
margin-right: auto;

`
export const FormaBox =styled.div`
position:absolute;
top:25%;
left:35%;
width: 260px;
height:70px;
background-color: #A9A9A9;
border: 2px solid black;
margin:20px;
padding:15px;




`
