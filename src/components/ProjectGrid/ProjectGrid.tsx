import { IProject } from "@/components/Project";
import styles from "./ProjectGrid.module.css";
import Image from "next/image";
export interface IProps {
  projects: IProject[];
}

// const ProjectGrid: React.FC<React.PropsWithChildren<IProps>> = ({
//   projects,
//   children,
//   ...delegated
// }) => {
//   return (
//     <div className={styles.projectGrid} id="other-projects">
//       <h2 className={styles.subTitle}>
//         Other Projects
//         <p className={styles.subText}>Tap on a project to learn more!</p>
//       </h2>

//       <div className={styles.grid} {...delegated}>
//         {projects.map((project, idx) => {
//           return (
//             <Image
//               className={styles.projectThumbnail}
//               height={300}
//               width={300}
//               key={idx}
//               src={project.imgSrc}
//               alt={project.name}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const ProjectGrid: React.FC<React.PropsWithChildren<IProps>> = ({
  projects,
  children,
  ...delegated
}) => {
  return (
    <div className={styles.projectGrid} id="other-projects">
      <h2 className={styles.subTitle}>
        Other Projects
        <p className={styles.subText}>Tap on a project to learn more!</p>
      </h2>

      <div className={styles.grid} {...delegated}>
        {projects.map((project, idx) => (
          <a
            href={project.github}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
          >
          <div className={styles.projectItem}>
            <h3 className={styles.projectTitle}>{project.name}</h3>
            <Image
              className={styles.projectThumbnail}
              height={300}
              width={300}
              src={project.imgSrc}
              alt={project.name}
            />
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};


export default ProjectGrid;
