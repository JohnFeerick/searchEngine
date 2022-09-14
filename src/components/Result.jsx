import React from 'react';

const Result = (data) => {
    return (
        <div className='searchPage__result'>
            <a href={data.link}>
                {data.displayLink} ▽
            </a>
            <a className='searchPage__resultTitle' href={data.link}>
                <h2>{data.title}</h2>
            </a>
            <p className="searchPage__resultSnippet">
                {data.snippet}
            </p>
        </div>
    );
}

export default Result;
