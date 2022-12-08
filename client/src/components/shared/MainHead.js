import { MainHeadSection, MainHeadSubTitle } from '../styles/mainStyles';

const MainHead = ({ title, subTitle }) => (
  <MainHeadSection>
    <h1 className="text-center">{title}</h1>
    {
      subTitle ?
      <MainHeadSubTitle>
        {subTitle}
      </MainHeadSubTitle>
      : 
      ''
    }
  </MainHeadSection>
)

export default MainHead;