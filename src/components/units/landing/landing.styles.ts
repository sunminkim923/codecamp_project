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
  padding-top: 120px;
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
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const ProfileExplanationWrapper = styled.div`
  padding-right: 60px;
`;

export const ProfileExplanationTextWrapper = styled.div`
  width: 1000px;
  height: 500px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProfileExplanationText = styled.div`
  font-size: 20px;
  font-weight: 500;
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
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
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
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
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
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
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
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
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
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: orange;
    transition: 0.5s;
    box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.5);
  }
`;

export const TopButton = styled.div`
  margin-left: 40px;
  width: 50px;
  height: 50px;
  font-size: 24px;
  border: 1px solid #bdbdbd;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  :hover {
    background-color: orange;
    transition: 0.5s;
  }
`;

export const ProjectsWrapper = styled.div`
  margin-top: 80px;
  width: 1400px;
  height: 550px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProjectBoardWrapper = styled.div`
  width: 350px;
  height: 550px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: lightcoral;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.5);
  }
`;

export const ProjectMarketWrapper = styled.div`
  width: 350px;
  height: 550px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: lightcoral;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.5);
  }
`;

export const ProjectNativeWrapper = styled.div`
  width: 350px;
  height: 550px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: lightcoral;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.5);
  }
`;

export const ProjectsImg = styled.img`
  width: 230x;
  height: 230px;
  margin-top: 20px;
  border-radius: 20px;
`;

export const MyProjectStackWrapper = styled.div`
  width: 250px;
  height: 250px;
  /* border: 1px solid red; */
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyProjectStackTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 150px;
  height: 40px;
  background-color: #5227ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyProjectStackTextWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

export const MyProjectStackText = styled.div`
  padding-top: 5px;
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
`;
