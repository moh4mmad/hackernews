import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '@/app/components/Main/Main';
import renderer from 'react-test-renderer';

describe('Page Main', () => {
  it('should render Main component', () => {
    const { container } = render(<Main />);
    expect(container.getElementsByClassName('px-8 py-8').length).toBe(1);
    expect(container).toMatchSnapshot();
  });
});
