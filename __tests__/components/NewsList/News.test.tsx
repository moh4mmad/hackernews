import { render, screen } from '@testing-library/react';
import News from '@/app/components/NewsList/News';

describe('Page News Component', () => {
  test('should render News component', () => {
    const content = render(<News />);

    const linkElement = screen.getByRole('link', {
      name: /1 Show HN: DriftDB is an open source WebSocket backend for real-time apps/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://driftdb.com/');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(content).toMatchSnapshot();
  });
});
