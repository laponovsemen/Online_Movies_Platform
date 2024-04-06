import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";


const LoginModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top:0;
  left: 0;
  background-color: rgba(100,100,100,0.8);

`

const LoginModal = styled.div`
  position: fixed;
  width: 600px;
  height: 300px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  background-color: ${Theme.colors.primaryBackGround};

`
const Form = styled.div`
	width: 100%;
  height: 100%;
  position: relative;
  
`
const FormText = styled.span`
	display: block;
`

const FormWrapper = styled.div`
	position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


export const S = {
	LoginModalBackground,
	LoginModal,
	Form,
	FormText,
	FormWrapper
}
