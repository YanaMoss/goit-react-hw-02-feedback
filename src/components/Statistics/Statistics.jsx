import React from 'react';
import PropTypes from 'prop-types';
import { StatiscsItem } from './Statistic.styled';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <ul>
      <StatiscsItem>Good:{good}</StatiscsItem>
      <StatiscsItem>Neutral: {neutral}</StatiscsItem>
      <StatiscsItem>Bad:{bad}</StatiscsItem>
      <StatiscsItem>Total:{total}</StatiscsItem>
      <StatiscsItem>Positive feedback:{positivePercentage}%</StatiscsItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
