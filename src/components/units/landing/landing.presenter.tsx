//@ts-ignore
import Fade from "react-reveal/Fade";

import {
  Wrapper,
  Section01,
  Section02,
  Section03,
  Section04,
  Title,
  ProfileWrapper,
  ProfileImg,
  ProfileExplanationWrapper,
  ProfileExplanationTextWrapper,
  ProfileExplanationText,
  ProjectExplanationWrapper,
  ProjectStackWrapper,
  ProjectLanguage,
  ProjectFramework,
  ProjectNetwork,
  ProjectGeneral,
  StackTitleWrapper,
  StackTitle,
  StackText,
  AboutWrapper,
  AboutNotionWrapper,
  AboutNotion,
  AboutGithubWrapper,
  AboutGithub,
  AboutBlogWrapper,
  AboutBlog,
  DetailButton,
} from "./landing.styles";

export default function LandingUI() {
  const onClickNotion = () => {
    window.open(
      "https://innovative-canid-3bc.notion.site/9afec31c4db04d079b67bf605cfd3244"
    );
  };

  const onClickGithub = () => {
    window.open("https://github.com/sunminkim923");
  };

  const onClickBlog = () => {
    window.open("https://velog.io/@tjsals0406");
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
                    프론트엔드 개발자 김선민입니다.</ProfileExplanationText> */}
                </ProfileExplanationTextWrapper>
              </Fade>
            </ProfileExplanationWrapper>
          </ProfileWrapper>
        </Section01>
      </Fade>
      <Fade bottom>
        <Section02>
          <Fade bottom>
            <Title>My Stacks</Title>
          </Fade>
          <ProjectExplanationWrapper>
            {/* <ProjectExplanationTextWrapper>
              <Fade bottom>
                <ProjectExplanationText>
                  본 프로젝트는 Next.js를 기반으로 제작되었으며, Chrome
                  브라우저에 최적화 되어있습니다.
                </ProjectExplanationText>
                <ProjectExplanationText>
                  CRUD를 기반으로 회원가입, 로그인, 게시물 작성, 결제, 구매 등
                  다양한 기능을 구현하여 소셜 커뮤니티를 만들고자 하였습니다.
                </ProjectExplanationText>
              </Fade>
            </ProjectExplanationTextWrapper> */}

            <Fade bottom>
              <ProjectStackWrapper>
                <ProjectLanguage>
                  <StackTitle> Language </StackTitle>
                  <Fade bottom>
                    <StackText>Javascript</StackText>
                    <StackText>HTML</StackText>
                    <StackText>CSS</StackText>
                  </Fade>
                </ProjectLanguage>
                <ProjectFramework>
                  <StackTitleWrapper>
                    <StackTitle>Framework & Library</StackTitle>
                  </StackTitleWrapper>
                  <Fade bottom>
                    <StackText>Next.js</StackText>
                    <StackText>React & React-hooks</StackText>
                    <StackText>React-Native</StackText>
                    <StackText>Typescript</StackText>
                    <StackText>Emotion</StackText>
                    <StackText>Styled-Component</StackText>
                  </Fade>
                </ProjectFramework>
                <ProjectNetwork>
                  <StackTitle> Network </StackTitle>
                  <Fade bottom>
                    <StackText>GraphQL & Apollo</StackText>
                    <StackText>Rest API & axios</StackText>
                    <StackText>Firebase</StackText>
                  </Fade>
                </ProjectNetwork>
                <ProjectGeneral>
                  <StackTitle> Cooperation </StackTitle>
                  <Fade bottom>
                    <StackText>Git & Github</StackText>
                    <StackText>Notion</StackText>
                    <StackText>Slack</StackText>
                    <StackText>Figma</StackText>
                    <StackText>Zeplin</StackText>
                  </Fade>
                </ProjectGeneral>
              </ProjectStackWrapper>
            </Fade>
          </ProjectExplanationWrapper>
        </Section02>
      </Fade>
      <Fade bottom>
        <Section03>
          <Title>ABOUT ME</Title>
          <Fade bottom>
            <AboutWrapper>
              <AboutNotionWrapper>
                <AboutNotion src="/images/myprofile/notion.png" />
                <Fade bottom>
                  <DetailButton onClick={onClickNotion}>
                    {" "}
                    이력서 자세히 보기{" "}
                  </DetailButton>
                </Fade>
              </AboutNotionWrapper>
              <AboutGithubWrapper>
                <AboutGithub src="/images/myprofile/github.png" />
                <Fade bottom>
                  <DetailButton onClick={onClickGithub}>
                    {" "}
                    Github 자세히 보기{" "}
                  </DetailButton>
                </Fade>
              </AboutGithubWrapper>
              <AboutBlogWrapper>
                <AboutBlog src="/images/myprofile/velog.jpeg" />
                <Fade bottom>
                  <DetailButton onClick={onClickBlog}>
                    {" "}
                    블로그 자세히 보기{" "}
                  </DetailButton>
                </Fade>
              </AboutBlogWrapper>
            </AboutWrapper>
          </Fade>
        </Section03>
      </Fade>
      <Fade bottom>
        <Section04>
          <Title>Other Projects</Title>
        </Section04>
      </Fade>
    </Wrapper>
  );
}
