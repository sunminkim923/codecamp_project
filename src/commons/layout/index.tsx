import LayoutHeader from "./header/LayoutHeader.container"
import LayoutBanner from "./banner/LayoutBanner.container"
import LayoutNavigation from "./navigation/LayoutNavigation.container"
import LayoutFooter from "./footer/LayoutFooter.container"
import styled from "@emotion/styled"



export default function Layout (props:any) {


    return (
        <>
            <LayoutHeader />
            <LayoutBanner />
            <LayoutNavigation />
            <div>{props.children}</div>
            <LayoutFooter />
        </>
    )
}

