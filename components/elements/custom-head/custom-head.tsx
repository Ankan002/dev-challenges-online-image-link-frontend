import React from "react";
import Head from "next/head";

interface Props {
    title: string;
}

const CustomHead = (props: Props) => {
    return (
        <Head>
            <title>{ props.title }</title>
            <meta name="description" content="A image link solution for all your remote needs." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default CustomHead;
