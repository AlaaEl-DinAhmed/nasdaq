import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';
describe('Avatar component', () => {
  it('Should render successfully', () => {
    const props = {
      src: '',
      alt: '',
      width: 0,
      fallback: '',
    };
    render(<Avatar {...props} />);

    expect(screen.getByRole('img')).toBeDefined();
  });

  it('Should have alt text image', () => {
    const props = {
      src: 'https://via.placeholder.com/600x400',
      alt: 'place holder image',
      width: 600,
      fallback: '',
    };
    render(<Avatar {...props} />);

    const displayedImage = document.querySelector('img') as HTMLImageElement;

    expect(displayedImage.alt).toContain(props.alt);
  });

  it('Should have src url', () => {
    const props = {
      src: 'https://via.placeholder.com/600x400',
      alt: 'place holder image',
      width: 600,
      fallback: '',
    };
    render(<Avatar {...props} />);

    const displayedImage = document.querySelector('img') as HTMLImageElement;

    expect(displayedImage.src).toContain(props.src);
  });
});
