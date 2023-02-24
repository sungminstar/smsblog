import { useParams } from "react-router-dom";
import styled from "styled-components";

const PostView = () => {
  const params = useParams();
if (params.postID == 1) {
  return (
    <Post>
      <PostTitle>1번 포스팅</PostTitle>
      <PostData>2022. 12. 31</PostData>
      <PostContent>1번 포스팅 내용</PostContent>
      <PostTag>#1번 해시태그</PostTag>
    </Post>
  )
}
else if (params.postID == 2) {
  return (
    <Post>
      <PostTitle>2번 포스팅</PostTitle>
      <PostData>2023. 1. 1</PostData>
      <PostContent>2번 포스팅 내용</PostContent>
      <PostTag>#2번 해시태그</PostTag>
    </Post>
  )
}
else if (params.postID == 3) {
  return (
    <Post>
      <PostTitle>3번 포스팅</PostTitle>
      <PostData>2023. 1. 2</PostData>
      <PostContent>3번 포스팅 내용</PostContent>
      <PostTag>#3번 해시태그</PostTag>
    </Post>
  )
}
else if (params.postID == 4) {
  return (
    <Post>
      <PostTitle>4번 포스팅</PostTitle>
      <PostData>2023. 1. 3</PostData>
      <PostContent>4번 포스팅 내용</PostContent>
      <PostTag>#4번 해시태그</PostTag>
    </Post>
  )
}
}

const Post = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10%;

  display: flex;
  flex-direction: column;
  //justify-content: center;
`;

const PostTitle = styled.div`
  width: 80vw;
  height: 30vh;
  padding: 5%;
  
  font-size: 100%;
  background-color: #0078FF;
`;

const PostData = styled.div`
  width: 80vw;
  height: 20vh;
  padding: 5%;
  margin-left: 60%;
  
  font-size: 100%;
  color: gray;
`;

const PostContent = styled.div`
  width: 80vw;
  height: 90vh;

  font-size: 100%;
`;

const PostTag = styled.div`
  width: 80vw;
  height: 100vh;

  font-size:100%;
  color: gray;
`;



export default PostView; 

/*
 <div>
      <p> PostView 페이지 입니다. </p>
      <p> {params.postID } 포스팅을 읽고 있습니다. </p>
    </div>
    */