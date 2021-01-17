import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import { Box, Heading } from "rebass";

import { createBook } from "../api";

import { Container, BookForm } from "../shared";

export const CreateBook = () => {
    const history = useHistory();
    const { mutateAsync, isLoading } = useMutation(createBook);

    const onFormSubmit = async (data) => {
        await mutateAsync(data);
        history.push("/");
    };

    return (
        <Container>
            <Box py={3}>
                <Heading mb={3}>Create new book</Heading>
                <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
            </Box>
        </Container>
    );
};
