"use client"

const { default: Header } = require("../header/Header")

const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout;