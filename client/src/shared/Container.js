import React from "react";

import { Box } from "rebass/styled-components";

export const Container = ({ children }) => {
    return (
        <Box sx={{ widh: "100%", maxWidth: 1024, mx: "auto", px: 20, mt: 50 }}>
            {children}
        </Box>
    );
};
