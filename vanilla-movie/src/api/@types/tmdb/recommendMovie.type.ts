export type getRecommendMovieRequestParams ={
   launguage : string,
   page  : number
}
export type getRecommendMovieRequsetPath ={ 
   movie_id : number
}
export type getReCommendMovieRequsetBody={}

export type getRecommendRequest ={
   params: getRecommendMovieRequestParams,
   path : getRecommendMovieRequsetPath,
   body? : getReCommendMovieRequsetBody
}

export type getRecommendResponse = {
   "page": number ,
   "results": Array<{
      "backdrop_path":string,
      "id": number,
      "title":string,
      "original_title":string,
      "overview":string,
      "poster_path":string,
      "media_type":string,
      "adult": boolean,
      "original_language":string,
      "genre_ids": Array<number>
   }>,
   "total_pages": number,
   "total_results": number
}

