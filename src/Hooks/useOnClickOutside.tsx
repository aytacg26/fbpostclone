import { useEffect } from 'react';

//From https://usehooks.com/useOnClickOutside/
//Just added the close on esc click to the hook
const useOnClickOutside = (
  ref: any,
  handler: (event: MouseEvent | KeyboardEvent | TouchEvent) => void
) => {
  useEffect(
    () => {
      const listener = (event: MouseEvent | KeyboardEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements

        if (
          event.type === 'keyup' &&
          event instanceof KeyboardEvent &&
          event.key === 'Escape'
        ) {
          handler(event);
        }

        if (
          !ref.current ||
          ref.current.contains(event.target) ||
          ref.current.offsetParent.contains(event.target)
        ) {
          return;
        }

        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      document.addEventListener('keyup', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
        document.removeEventListener('keyup', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};

export default useOnClickOutside;
