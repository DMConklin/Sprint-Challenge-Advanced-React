import React from 'react';
import { render } from '@testing-library/react';
import PlayerCard from './PlayerCard';

it("renders", async () => {
    const Player = render(<PlayerCard player={{name: 'test', country: 'US', searches: 1}} />);
    Player.queryByText(/Name/);
    Player.queryByText(/Country/);
    Player.queryByText(/Searches/);
});