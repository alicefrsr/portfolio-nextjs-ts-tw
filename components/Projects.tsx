import SectionHeading from './SectionHeading';
import projectsData from '@/lib/projectsData';
import Project from './Project';

export default function Projects() {
  return (
    <section className=''>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
