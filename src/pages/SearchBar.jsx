import React, { useState } from 'react';
import './SearchBar.css';
import Search from "@material-ui/icons/Search";
import { Mic } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const SearchBar = ({hideButtons = false, value = ''}) => {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const search = e => {
        e.preventDefault();
        console.log('You hit the search button: ', input)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        navigate('/search')
    };

    return (
        <form className='search'>
            <div className="search__input">
                <Search className="search__inputIcon" />
                <input value={value || input} onChange={e => setInput(e.target.value)}/>
                <Mic />
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button onClick={search} variant='outlined' type="submit">
                        Google Search
                    </Button>
                    <Button variant='outlined'>I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button onClick={search} variant='outlined' type="submit" 
                    className='search__buttonsHidden'>
                        Google Search
                    </Button>
                    <Button variant='outlined' className='search__buttonsHidden'>I'm Feeling Lucky</Button>
                </div>
            )}
            
        </form>
    );
}

export default SearchBar;
