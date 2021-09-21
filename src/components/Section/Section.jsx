import React from 'react';
import PropTypes from 'prop-types';
import { SectionPage, Title } from './Sections.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionPage>
      <Title>{title}</Title>
      {children}
    </SectionPage>
  );
};

Section.propTypec = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
