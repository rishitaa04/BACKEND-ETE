
import { useState, useContext } from 'react';

import { Box, Button, Typography, Badge } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
// >>>>>>> f9e36987395e3c2186dfc62b8fd1410728b2140a
import { ShoppingCart } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DataContext } from '../../context/DataProvider';

// components 
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)`
    display: flex;
    margin : 0 3% 0 auto; 
    & > button , & > p , & > div {
        margin-top: 10px;

        margin-right: 40px !important;
        margin-right: 40px;
>>>>>>> f9e36987395e3c2186dfc62b8fd1410728b2140a
        font-size: 16px;
        align-items: center;
    }
`;

const container = styled(Box)`
    display: flex;
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;    
`;



const CustomButton = () => {
// <<<<<<< HEAD

    const [ open, setOpen ] = useState(false);

    const { account,setAccount } = useContext(DataContext);
 
    const { cartItems } = useSelector(state => state.cart);
    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account = { account } setAccount={setAccount} /> : 
                    <LoginButton variant = 'contained' onClick={() => openDialog()} > Login </LoginButton>
            }
=======
    return (
        <Wrapper>
            <LoginButton variant = 'contained' > Login </LoginButton>


            <Typography style={{ marginTop: 15, width: 135 }}> Become a Seller </Typography>
            <Typography style={{ marginTop: 15 }}> More </Typography>


            <Container to ="/cart">
                <Badge badgeContent={cartItems?.length} color= "secondary">
                    <ShoppingCart/>
                </Badge>
                <Typography style={{ marginLeft: 10 }}> Cart </Typography>
            </Container>
            <LoginDialog open={ open } setOpen={ setOpen } />
        </Wrapper>
    )
export default CustomButton;
