import React from "react";

import { Link } from "react-router-dom";
import { Flex, Box, Link as StyledLink, Image } from "rebass/styled-components";

const Navbar = () => {
    return (
        <Flex bg="black" color="white" justifyContent="center" py={10}>
            <Flex
                px={2}
                width="100%"
                alignItems="center"
                justifyContent="space-between"
            >
                <Link component={StyledLink} variant="nav" to="/">
                    React Query CRUD
                </Link>
                <Box mx="auto" />
                <Link component={StyledLink} variant="nav" to="/create-book">
                    + Add a new book
                </Link>
            </Flex>
        </Flex>
    );
};

export default Navbar;
