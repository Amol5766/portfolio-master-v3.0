import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from 'react-icons/di';
import { SiFirebase, SiPostgresql } from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'animate.css';

const techList = [
  { icon: <CgCPlusPlus />, name: 'C++' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <DiMysql />, name: 'MySQL' },
  { icon: <DiJavascript1 />, name: 'JavaScript' },
  { icon: <TbBrandGolang />, name: 'Golang' },
  { icon: <DiNodejs />, name: 'Node.js' },
  { icon: <DiReact />, name: 'React' },
  { icon: <DiMongodb />, name: 'MongoDB' },
  { icon: <DiGit />, name: 'Git' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <DiPython />, name: 'Python' },
  { icon: <DiJava />, name: 'Java' },
];

function Techstack() {
  const iconRefs = useRef([]);

  return (
    <Row
      style={{
        justifyContent: 'center',
        paddingBottom: '50px',
        cursor: 'pointer',
      }}
    >
      {techList.map((tech, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <Tippy
            content={tech.name}
            theme="light-border"
            onShow={() => {
              const icon = iconRefs.current[index];
              if (icon) {
                icon.classList.remove('animate__rubberBand');
                void icon.offsetWidth; // reflow
                icon.classList.add('animate__animated', 'animate__rubberBand');
              }
            }}
          >
            <span ref={(el) => (iconRefs.current[index] = el)}>
              {tech.icon}
            </span>
          </Tippy>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
