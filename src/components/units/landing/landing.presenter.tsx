//@ts-ignore
import Fade from "react-reveal/Fade";

import {
  Wrapper,
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Title,
  ProfileWrapper,
  ProfileImg,
  ProfileExplanationWrapper,
  ProfileExplanationTextWrapper,
  ProfileExplanationText,
  ProjectExplanationWrapper,
} from "./landing.styles";

export default function LandingUI() {
  const onClickButton = () => {
    // location.href = "https://www.naver.com/";
    window.open("https://www.naver.com/");
  };

  return (
    <Wrapper>
      <Fade bottom>
        <Section01>
          <Fade bottom>
            <Title> WELCOME! </Title>
          </Fade>
          <ProfileWrapper>
            <ProfileImg src="/images/myprofile/main_profile.jpg" />
            <ProfileExplanationWrapper>
              <Fade bottom>
                <ProfileExplanationTextWrapper>
                  <ProfileExplanationText>
                    환영합니다. 고객경험을 넘어서 현재는 개발을 사랑하는
                    프론트엔드 개발자 김선민입니다.
                  </ProfileExplanationText>
                  {/* <ProfileExplanationText>
                    환영합니다. 고객경험을 넘어서 현재는 개발을 사랑하는
                    프론트엔드 개발자 김선민입니다.
                  </ProfileExplanationText>
                  <ProfileExplanationText>
                    환영합니다. 고객경험을 넘어서 현재는 개발을 사랑하는
                    프론트엔드 개발자 김선민입니다.
                  </ProfileExplanationText> */}
                </ProfileExplanationTextWrapper>
              </Fade>
            </ProfileExplanationWrapper>
          </ProfileWrapper>
        </Section01>
      </Fade>
      <Fade bottom>
        <Section02>
          <Title>프로젝트 소개</Title>
          <ProjectExplanationWrapper></ProjectExplanationWrapper>
        </Section02>
      </Fade>
      <Fade bottom>
        <Section03>
          <h1>안녕하세요</h1>
        </Section03>
      </Fade>
      <Fade bottom>
        <Section04>
          <h1>안녕하세요</h1>
        </Section04>
      </Fade>
      <Fade bottom>
        <Section05>
          <h1>안녕하세요</h1>
        </Section05>
      </Fade>
    </Wrapper>
  );
}
