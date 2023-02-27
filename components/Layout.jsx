import Head from 'next/head';
import {Box} from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import dynamic from "next/dynamic";

const Layout = ({children}) => (
    <>
    <head>
        <title>
            MyRealEstate
        </title>
    </head>
    <Box maxWidth="1280px" m="auto">
        <header>
           <Navbar/>
        </header>
    <main>
        {children}
    </main>
    <footer>
        <Footer/>
    </footer>
    </Box>
    </>
);
<Layout>
    <h1>
        test
    </h1>
</Layout>


export default dynamic (() => Promise.resolve(Layout), {ssr: false})