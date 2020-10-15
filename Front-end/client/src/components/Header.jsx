/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const PhotosHeader = styled.h2`
  margin: inherit;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #2d333f;
  padding-bottom: 16px;
  border-bottom: 1px solid #d8d9db;
`;

const Header = ({ photos }) => {
  const length = photos.length;
  return (
    <div>
      <PhotosHeader>
        {length} Photos
      </PhotosHeader>
    </div>
  );
};

export default Header;
