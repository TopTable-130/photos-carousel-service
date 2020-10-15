/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

const FilterByCategoryList = styled.ul`
  padding-inline-start: 0px;
  border-bottom: 1px solid #d8d9db;
  list-style-type: none;
  margin-bottom: 12px;
`;

const StyledList = styled.li`
  display: inline;
  font-family: Helvetica, Arial, sans-serif;
`;

const AllButton = styled.button`
font-size: 14px;
color: #2d333f;
border: none;
background-color: transparent;
font-weight: 535;
line-height: 1.15;
margin-right: 16px;
padding: 16px 0;
border-bottom: 2px solid red;

&:hover {
  color: red;
}
&:focus {
  outline: none;
}
`;

const RemainingButtons = styled(AllButton)`
  border-bottom: none;
  &:hover {
    color: red;
    border-bottom: 2px solid red;
}
`;

const CategoryList = () => {
  return (
    <FilterByCategoryList id="cateogry-list">
      <StyledList id="list">
        <AllButton id="all-btn">All</AllButton>
        <RemainingButtons id="food-btn">Food</RemainingButtons>
        <RemainingButtons id="drink-btn">Drink</RemainingButtons>
        <RemainingButtons id="atmosphere-btn">Atmosphere</RemainingButtons>
      </StyledList>
    </FilterByCategoryList>
  );
};

export default CategoryList;
