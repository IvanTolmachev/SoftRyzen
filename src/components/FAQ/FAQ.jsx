import React, { useState, useRef } from 'react';
import { Section } from 'settings/Section';
import { CSSTransition } from 'react-transition-group';
import {
  ContactUsQuestion,
  FAQBlock,
  FAQBox,
  FAQContactUs,
  FAQModule,
  FAQQuestion,
  FAQQuestions,
  FAQTitle,
  TextQuestion,
  TitleQuestion,
} from './FAQ.styled';
import ButtonCircle from 'components/Buttons/ButtonCircle';

const FAQComponent = () => {
  const [expandedBlock, setExpandedBlock] = useState(1);
  const nodeRefs = useRef(
    Array(5)
      .fill(null)
      .map(() => React.createRef())
  );

  const handleToggleInfo = id => {
    setExpandedBlock(prev => (prev === id ? null : id));
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const faqBlocks = [
    {
      id: 1,
      question:
        'How do wind turbines and solar panels work together in a renewable energy system?',
      answer:
        'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
    },
    {
      id: 2,
      question:
        "What sets EcoSolution's renewable energy solutions apart from others on the market?",
      answer:
        'Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions.',
    },
    {
      id: 3,
      question:
        'How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?',
      answer:
        'Businesses and communities gain sustainable advantages by integrating EcoSolution"s renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future.',
    },
    {
      id: 4,
      question:
        'What measures does EcoSolution take to ensure the environmental sustainability of its products?',
      answer:
        'EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact.',
    },
    {
      id: 5,
      question:
        'How does EcoSolution engage with local communities and support a just transition to renewable energy?',
      answer:
        'EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all.',
    },
  ];

  return (
    <Section>
      <FAQBlock>
        <FAQTitle>
          Frequently Asked <br /> Questions
        </FAQTitle>
        <FAQModule>
          <FAQBox>
            {faqBlocks.map(block => (
              <FAQQuestions key={block.id}>
                <FAQQuestion>
                  <div
                    className="question-icon"
                    onClick={() => handleToggleInfo(block.id)}
                  >
                    {expandedBlock === block.id ? '-' : '+'}
                  </div>
                  <div>
                    <TitleQuestion onClick={() => handleToggleInfo(block.id)}>
                      {block.question}
                    </TitleQuestion>

                    <CSSTransition
                      in={expandedBlock === block.id}
                      timeout={300}
                      classNames="alert"
                      unmountOnExit
                      nodeRef={nodeRefs.current[block.id - 1]}
                    >
                      <TextQuestion
                        className="alert"
                        ref={nodeRefs.current[block.id - 1]}
                      >
                        {block.answer}
                      </TextQuestion>
                    </CSSTransition>
                  </div>
                </FAQQuestion>
              </FAQQuestions>
            ))}
          </FAQBox>
          <FAQContactUs>
            <ContactUsQuestion>
              Didn't find the answer to your question?
            </ContactUsQuestion>
            <ButtonCircle onClick={handleClick} label="Get in touch" />
          </FAQContactUs>
        </FAQModule>
      </FAQBlock>
    </Section>
  );
};

export default FAQComponent;
