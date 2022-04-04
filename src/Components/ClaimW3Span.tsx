import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`
const HowToSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 16px;
  width: 200px;
  text-align: left;

  #claim {
    margin-left: 8px;
  }
  a {
    color: ${(props) => props.theme.web3name};
    text-decoration: none;
  }
`
export const ClaimW3Span = () => {
  return (
    <Container>
      <HowToSpan>
        <span>*Want your own web3name?</span>
        <span id="claim">
          Learn <a href=" ">how to</a> claim it.
        </span>
      </HowToSpan>
    </Container>
  )
}