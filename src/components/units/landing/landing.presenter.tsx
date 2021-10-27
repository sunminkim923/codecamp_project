//@ts-ignore
import Fade from "react-reveal/Fade";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

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
  TopButton,
  ProjectsWrapper,
  ProjectBoardWrapper,
  ProjectMarketWrapper,
  ProjectNativeWrapper,
  ProjectsImg,
  MyProjectStackWrapper,
  MyProjectStackTitle,
  MyProjectStackTextWrapper,
  MyProjectStackText,
} from "./landing.styles";
import { useRouter } from "next/router";

export default function LandingUI() {
  const router = useRouter();

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

  const onClickBoard = () => {
    router.push("/board/list");
  };

  const onClickMarket = () => {
    router.push("/market/list");
  };

  const onClickNative = () => {
    window.open(
      "https://innovative-canid-3bc.notion.site/604bbc989d55418ba8c63ed21ec36312"
    );
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
                    안녕하세요. 고객경험을 넘어서 현재는 개발을 사랑하는
                    프론트엔드 개발자 김선민입니다.
                  </ProfileExplanationText>
                  <ProfileExplanationText>
                    고객경험을 바탕으로 클라이언트 입장에서 서비스를 구현해보고
                    싶어서 개발을 시작하게 되었습니다.
                  </ProfileExplanationText>
                  <ProfileExplanationText>
                    단순히 코드를 작성하는 개발자가 아니라, 문제를 지혜롭게
                    해결해 나가는 개발자로 성장하길 희망합니다.
                  </ProfileExplanationText>
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
          <Title>MY PROJECTS</Title>
          <ProjectsWrapper>
            <Fade bottom>
              <ProjectBoardWrapper onClick={onClickBoard}>
                <MyProjectStackTitle> 자유게시판 </MyProjectStackTitle>
                <ProjectsImg src="/images/myprofile/test01.jpg" />
                <MyProjectStackWrapper>
                  {/* <MyProjectStackTitle> 자유게시판 </MyProjectStackTitle> */}
                  <MyProjectStackTextWrapper>
                    <Fade bottom>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                    </Fade>
                  </MyProjectStackTextWrapper>
                </MyProjectStackWrapper>
              </ProjectBoardWrapper>
            </Fade>
            <Fade bottom>
              <ProjectMarketWrapper onClick={onClickMarket}>
                <MyProjectStackTitle> 중고마켓 </MyProjectStackTitle>
                <ProjectsImg src="/images/myprofile/test02.jpg" />
                <MyProjectStackWrapper>
                  {/* <MyProjectStackTitle> 중고마켓 </MyProjectStackTitle> */}
                  <MyProjectStackTextWrapper>
                    <Fade bottom>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                    </Fade>
                  </MyProjectStackTextWrapper>
                </MyProjectStackWrapper>
              </ProjectMarketWrapper>
            </Fade>
            <Fade bottom>
              <ProjectNativeWrapper onClick={onClickNative}>
                <MyProjectStackTitle> 산책가까? </MyProjectStackTitle>
                <ProjectsImg src="/images/myprofile/test02.jpg" />
                <MyProjectStackWrapper>
                  {/* <MyProjectStackTitle> 산책가까? </MyProjectStackTitle> */}
                  <MyProjectStackTextWrapper>
                    <Fade bottom>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                      <MyProjectStackText> - Next.js </MyProjectStackText>
                    </Fade>
                  </MyProjectStackTextWrapper>
                </MyProjectStackWrapper>
              </ProjectNativeWrapper>
            </Fade>
          </ProjectsWrapper>
        </Section04>
      </Fade>
      <BackTop>
        <TopButton>
          <ArrowUpOutlined />
        </TopButton>
      </BackTop>
    </Wrapper>
  );
}
