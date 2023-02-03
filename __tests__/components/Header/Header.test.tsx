import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/app/components/Header/Header';
import renderer from 'react-test-renderer';

describe('Page Header', () => {
  it('should render Header component', () => {
    const container = render(<Header />);
    const heading = screen.getByRole('heading', {
      name: /-- Hacker News --/i,
    });
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
