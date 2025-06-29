import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiFigma,
  SiPostman,
  SiVercel,
  SiWindows,
  SiRender,
} from 'react-icons/si';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'animate.css';

const toolList = [
  { icon: <SiWindows />, name: 'Windows' },
  { icon: <SiVisualstudiocode />, name: 'VSCode' },
  { icon: <SiFigma />, name: 'Figma' },
  { icon: <SiPostman />, name: 'Postman' },
  { icon: <SiVercel />, name: 'Vercel' },
  { icon: <SiRender />, name: 'Render' },
];

function Toolstack() {
  const iconRefs = useRef([]);

  return (
    <Row
      style={{
        justifyContent: 'center',
        paddingBottom: '50px',
        cursor: 'pointer',
      }}
    >
      {toolList.map((tool, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <Tippy
            content={tool.name}
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
              {tool.icon}
            </span>
          </Tippy>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
