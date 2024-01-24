import React from 'react';
import styled from 'styled-components';

const MemberContainer = styled.div`
  margin: 20px;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 10%;
  object-fit: cover;
  cursor: pointer;
`;

const MemberName = styled.div`
  font-size: 18px;
  margin-top: 5px;
`;

const MemberInfo = styled.p`
  font-size: 13px;
  text-align: left;
`;

const MemberDetail = ({ name, fullname, imageUrl, Birthday, info, Background }) => {
  return (
    <MemberContainer>
      <MemberImage src={imageUrl} alt={name} />
      <MemberName>{fullname}</MemberName>
      <MemberInfo>
        <div>{name}</div>
        <div>{Birthday}</div>
        <div>{info}</div>
        {Background && <div>{Background}</div>}
      </MemberInfo>
    </MemberContainer>
  );
};

export default MemberDetail;
