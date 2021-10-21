import { PageWrapper, Page } from "./pagenations.styles";

export default function PagenationsPageUI(props: any) {
  return (
    <PageWrapper>
      <Page onClick={props.onClickPrevPage}>이전</Page>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
        <Page
          onClick={props.onClickPage}
          key={props.startPage + index}
          id={props.startPage + index}
        >
          {props.startPage + index}
        </Page>
      ))}
      <Page onClick={props.onClickNextPage}>다음</Page>
    </PageWrapper>
  );
}
