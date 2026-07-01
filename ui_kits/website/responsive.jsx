/* global React */
/**
 * Laux Creatives — responsive helper.
 * A tiny viewport hook shared by every screen. Because the site is built with
 * inline styles (which CSS media queries can't override), each component reads
 * these flags and swaps to a mobile / tablet layout at render time.
 *
 * Breakpoints:
 *   isMobile  <= 768px   (phones — single column, hamburger nav)
 *   isTablet  769–1024px (2-column grids, tightened spacing)
 *   desktop   > 1024px   (original design, unchanged)
 */
function useViewport() {
  const read = () => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1280;
    return { width: w, isMobile: w <= 768, isTablet: w > 768 && w <= 1024 };
  };
  const [vp, setVp] = React.useState(read);
  React.useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVp(read()));
    };
    window.addEventListener('resize', onResize);
    onResize();
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(raf); };
  }, []);
  return vp;
}

window.useViewport = useViewport;
