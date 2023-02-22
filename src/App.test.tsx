import { render, screen } from '@testing-library/react';
import App from './App';

describe("test", () => {
    test("firt unit test", () => {
        render(<App />)
        expect(screen.getByText("Vite + React")).toBeInTheDocument();
    })
})
