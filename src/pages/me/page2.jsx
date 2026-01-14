import styles from "./page2.module.css";
import GlassDiv from '../../components/ui/glass/GlassDiv';
import GlassButton from '../../components/ui/glass/GlassButton';
import { useState } from "react";

const skills = [
  { name: "HTML / JS / CSS", level: 95, text: "Ces langages ont été mes premiers pas dans le monde de la programmation. C’est grâce à eux que j’ai construit mes bases, et je les utilise encore régulièrement aujourd’hui avec une solide maîtrise." },
  { name: "Three.js", level: 40, text: "J’ai commencé à apprendre Three.js spécifiquement pour réaliser ce portfolio. Il permet de créer de la 3D directement dans le navigateur, et j’ai pris beaucoup de plaisir à concevoir ce fond animé entièrement en 3D. L'objectif initial était de faire plus d'interactions entre le site et le fond 3D mais manque de temps." },
  { name: "Python", level: 50, text: "J’ai réalisé plusieurs projets avec Python, c’est l’un de mes langages préférés. Je suis à l’aise avec, même s’il me reste encore beaucoup de choses à découvrir." },
  { name: "Git", level: 80, text: "Git est un outil que j’utilise systématiquement dès qu’un projet devient un peu conséquent, aussi bien en personnel qu’en équipe. En travail de groupe, il est indispensable, et nous avons appris à l’utiliser en profondeur durant les cours." },
  { name: "Firebase", level: 25, text: "Je n’ai pas encore beaucoup utilisé Firebase et j’en maîtrise surtout les bases. Je l’ai employé une fois dans un projet de groupe, et j’ai pu constater à quel point l’outil est puissant et pratique." },
  { name: "React", level: 55, text: "Ce portfolio est développé en React. C’est mon deuxième projet avec ce framework et je commence à me sentir à l’aise avec. J’apprécie beaucoup la manière de travailler qu’il propose." },
  { name: "React Native", level: 35, text: "J’ai utilisé React Native dans le cadre d’un projet de groupe pour développer une application mobile, et j’ai vraiment apprécié l’expérience. Je me sens plutôt à l’aise avec." },
  { name: "Kotlin", level: 25, text: "J'ai découvert ce langage en faisant un petit projet personnel de développement d’application Android. Je n'ai pas encore beaucoup d'expérence avec mais j'ai apprécier voir comment il fonctionne." },
  { name: "Flutter", level: 75, text: "Avant mon stage, je ne connaissais pas Flutter. J’ai ensuite travaillé exclusivement avec ce framework pendant toute la durée de celui-ci, ce qui m’a permis de devenir très à l’aise et de l’apprendre directement en situation réelle." },
  { name: "Dart", level: 65, text: "Dart est le langage utilisé par Flutter. Je l’ai uniquement pratiqué dans ce contexte, mais je le maîtrise désormais bien grâce au stage." },
  { name: "TypeScript", level: 55, text: "TypeScript est une version typée de JavaScript, utilisée notamment avec React et d’autres frameworks. J’apprécie beaucoup ce langage et je suis à l’aise avec son utilisation." },
  { name: "Docker", level: 75, text: "Nous avons beaucoup utilisé Docker durant nos cours, ce qui m’a permis d’en acquérir une très bonne maîtrise. Je l’ai également réutilisé dans plusieurs projets personnels et scolaires." },
  { name: "C++", level: 50, text: "Nous avons réalisé un projet en C++ durant l’année, ce qui nous a permis d’en apprendre les bases en profondeur. Je l’ai également utilisé pour programmer un kart capable de se garer de manière autonome." },
  { name: "Angular", level: 25, text: "Nous avons utilisé Angular pour un projet durant mon cursus. J’ai bien apprécié le framework, même si je n’ai pas encore énormément d’expérience avec." },
];

export default function Page2() {
  const skillsDoubled = [...skills, ...skills];
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className={styles.page}>
      <GlassDiv className={styles.title}>
        <article>
          <h3>Technologies avec lesquelles j’ai travaillé</h3>
        </article>
      </GlassDiv>

      <div className={styles.scrollWindow}>
        <div className={styles.scrollContainer}>
          {skillsDoubled.map((skill, index) => (
            <GlassButton
              key={`${skill.name} ${index}`}
              className={styles.card}
              onClick={() => setSelectedSkill(skill)}
            >
              <h3>{skill.name}</h3>
            </GlassButton>
          ))}
        </div>
      </div>

      <GlassDiv >
        <div className={styles.descriptionCard}>
          <div className={styles.levelBar}>
            <div
              className={styles.levelFill}
              style={{
                height: selectedSkill ? `${selectedSkill.level}%` : "0%",
              }}
            />
          </div>

          <article>
            <h3>
              {selectedSkill ? selectedSkill.name : "Contexte"}
            </h3>

            <p>
              {selectedSkill
                ? selectedSkill.text
                : "Cliquez sur une technologie pour afficher le contexte"}
            </p>
          </article>
        </div>
      </GlassDiv>

    </div>
  );
}