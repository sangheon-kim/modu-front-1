export type getReviewListRequestParams = {
  //입력받을 언어
  language?: string;
  //페이지 번호
  page?: number;
};

export type getReviewListRequestPath = {
  movie_id: number;
};

export type getReviewListRequestBody = {};

export type getReviewListRequest = {
  params: getReviewListRequestParams;
  path?: getReviewListRequestPath;
  body?: getReviewListRequestBody;
};

export type getReviewListResponse = {
  //영화 ID
  id: number;
  //페이지 번호
  page: number;
  //리뷰 결과 목록
  results: Array<{
    //저자
    author: string;
    //저자 상세 목록
    author_details: {
      //저자 이름
      name: string;
      //유저 이름
      username: string;
      //아바타 경로
      avatar_path: null;
      //순위
      rating: number;
    };
    //리뷰 내용
    content: string;
    //리뷰가 작성된 날짜 및 시간
    created_at: string;
    //리뷰 아이디
    id: string;
    //업데이트 된 날짜 및 시간
    updated_at: string;
    //리뷰가 작성된 URL
    url: string;
  }>;
};
