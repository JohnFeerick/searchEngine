import React from 'react';
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import SearchBar from './SearchBar';
import UseGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '@material-ui/icons/Search';
import { Description, Image, LocalOffer, MoreVert, Room } from '@material-ui/icons';
import Result from '../components/Result';


const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();
    const { data } = UseGoogleSearch(term); 
    
    console.log(data);
    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        className='searchPage__logo' 
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                        alt="" 
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <SearchBar hideButtons/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <Search />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <Description />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <Image />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOffer />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <Room />
                                <Link to="/map">Map</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVert />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className='searchPage__resultCount'>
                        About {data?.searchInformation.formattedTotalResults} 
                        results ({data?.searchInformation.formattedSearchTime} seconds) 
                        for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a href={item.link} className="searchPage__resultLink">
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage__resultImage" 
                                    src={
                                        item.pagemap?.cse_image[0]?.src
                                    } 
                                    alt="" />
                                )}
                                {item.displayLink} ▽
                            </a>
                            <a className='searchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
