import SectionHeading from './SectionHeading';
import projectsData from '@/lib/projectsData';
import Project from './Project';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
