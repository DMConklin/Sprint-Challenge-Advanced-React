import { useState } from 'react';

export const SetPlayerSearches = initalValue => {
    const [searches, setSearches] = useState(initalValue);

    const handleSearches = () => {
        setSearches(searches + 1);
    }

    return [searches, handleSearches];
}