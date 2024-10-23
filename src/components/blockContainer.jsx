import NewsBlock from "./newsBlock";
import React, { useState } from "react";
import '../Styles/BlockContainer.css';

function BlockContainer() {
    const blocks = Array.from({ length: 12 }, (_, i) => i + 1);
    return (
        <>
        <div>
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        </div>
        </>
    );
}

export default BlockContainer;