<<<<<<< HEAD
import { useState, useEffect } from "react";
import { InputBase, Box, styled, ListItem, List } from "@mui/material";
=======
import { InputBase, Box, styled } from "@mui/material";
>>>>>>> f9e36987395e3c2186dfc62b8fd1410728b2140a
import SearchIcon from '@mui/icons-material/Search';

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
        background: #fff;
        width: 38%;
        border-radius: 2px;
        margin-left: 10px;
        display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

<<<<<<< HEAD
const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 36px;
`;

const Search = () => {

    const [text, setText ] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) => {
        setText(text);
    }

    return (
        <SearchContainer>
            <InputSearchBase 
                placeholder="Search for products,brands and more"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
=======
const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase placeholder="Search for products,brands and more" />
>>>>>>> f9e36987395e3c2186dfc62b8fd1410728b2140a
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text && 
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link 
                                    to={`/product/${product.id}`}
                                    onClick={() => setText('')}
                                    style={{ textDecoration: 'none', color: 'inherit'}}
                                >
                                    { product.title.longTitle }
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}
export default Search;
