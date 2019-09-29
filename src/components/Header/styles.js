import styled from 'styled-components';

export const Container = styled.div`
  height: 52px;
  background: #fff;
  padding: 0 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  height: 52px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: solid 1px #eee;
    }

    a {
      font-weight: bold;
      color: #4235b5;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 20px;
  border-left: solid 1px #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
