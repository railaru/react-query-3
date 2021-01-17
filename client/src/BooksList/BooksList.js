import { useQuery } from "react-query";
import { Flex } from "rebass";

import { getAllBooks } from "../api";

import Loader from "react-loader-spinner";
import BookItem from "./BookItem";

export const BooksList = () => {
    const { data, error, isLoading, isError } = useQuery("books", getAllBooks);

    if (isLoading) {
        return (
            <Flex justifyContent="center" alignItems="center" py={5}>
                <Loader type="ThreeDots" color="#ccc" height={30} />
            </Flex>
        );
    }

    if (isError) {
        return (
            <Flex justifyContent="center" alignItems="center" py={5}>
                Error fetching books. {error.message}
            </Flex>
        );
    }

    return (
        <>
            {data.map(({ author, title, id }) => (
                <BookItem key={id} author={author} title={title} id={id} />
            ))}
        </>
    );
};
