import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Section01 = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
export const Section02 = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fb;
  padding-top: 100px;
`;
export const Section03 = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  /* background-color: green; */
`;
export const Section04 = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background-color: #f7f8fb;
`;

export const Title = styled.div`
  /* padding-top: 100px;
  padding-bottom: 60px; */
  font-size: 70px;
  font-weight: 500;
  text-shadow: 20px;
`;

export const ProfileWrapper = styled.div`
  width: 1400px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 60px;
`;

export const ProfileImg = styled.img`
  width: 380px;
  border-radius: 40px;
`;

export const ProfileExplanationWrapper = styled.div`
  padding-right: 60px;
`;

export const ProfileExplanationTextWrapper = styled.div`
  width: 750px;
  height: 500px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProfileExplanationText = styled.div`
  font-size: 20px;
  text-align: center;
`;

export const ProjectExplanationWrapper = styled.div`
  /* border: 1px solid black; */
`;

export const ProjectExplanationTextWrapper = styled.div`
  width: 1400px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProjectExplanationText = styled.div`
  font-size: 25px;
  text-align: center;
`;

export const ProjectStackWrapper = styled.div`
  width: 1370px;
  height: 500px;
  padding-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProjectLanguage = styled.div`
  width: 320px;
  height: 500px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  border-radius: 20px;
`;

export const ProjectFramework = styled.div`
  width: 320px;
  height: 500px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  border-radius: 20px;
`;

export const ProjectNetwork = styled.div`
  width: 320px;
  height: 500px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  border-radius: 20px;
`;

export const ProjectGeneral = styled.div`
  width: 320px;
  height: 500px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  border-radius: 20px;
`;

export const StackTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StackTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  height: 40px;
  padding-bottom: 70px;
`;

export const FrameworkTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

export const StackText = styled.div`
  font-size: 24px;
  font-weight: 400;
  padding-top: 15px;
  text-align: center;
`;

export const AboutWrapper = styled.div`
  margin-top: 80px;
  width: 1400px;
  height: 550px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const AboutNotionWrapper = styled.div`
  width: 300px;
  height: 400px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const AboutNotion = styled.img`
  width: 200px;
  height: 200px;
`;

export const AboutGithubWrapper = styled.div`
  width: 300px;
  height: 400px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const AboutGithub = styled.img`
  width: 200px;
  height: 200px;
`;

export const AboutBlogWrapper = styled.div`
  width: 300px;
  height: 400px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const AboutBlog = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;

export const DetailButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  text-align: center;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 80px;
  cursor: pointer;
  :hover {
    width: 180px;
    height: 60px;
    background-color: orange;
    transition: 0.5s;
  }
`;
