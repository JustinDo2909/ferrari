type WrapperProps = {
  children: React.ReactNode;
  classname?: string;
};
type NavLinks = {
  path: string;
  name: string;
};
type RotatingContentProps = {
  items: T[];
  render: (currentItem: T, fadeout: boolean) => JSX.Element;
};
type LazyLoadProps = {
  children: React.ReactNode;
  threshold?: number; // Percentage of element visibility to trigger animation
  animationDuration?: number; // Duration of animation
  initialStyle?: Record<string, any>; // Initial style of the animation
  animateStyle?: Record<string, any>; // Style to animate to
};
export { WrapperProps, NavLinks, RotatingContentProps, LazyLoadProps };
