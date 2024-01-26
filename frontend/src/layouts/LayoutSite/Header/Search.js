import React from 'react'

function Search() {
    return (
        <>
            <li className="nav-item search-item">
                <div id="search-bar" className="border-right d-none d-lg-block">
                    <form action autoComplete="on">
                        <input id="search" className="text-dark" name="search" type="text" placeholder="Search Here..." />
                        <a type="submit" className="nav-link me-0" href="#a">Search</a>
                    </form>
                </div>
            </li>
        </>
    )
}

export default Search
