import { useActiveSessionContext } from '@/context/ActiveSectionContext';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import type { SectionName } from './types';

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSessionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return {
    ref,
  };
}
