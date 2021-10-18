import useCurrentUser from "./useCurrentUser";

function Profile() {
  const [currentUser, error, isLoading, getCurrentUser] = useCurrentUser();
  return (
    <>
      <h1>GitHubのユーザー情報</h1>
      {currentUser && (
        <p>
          {currentUser.name}
          <br />@{currentUser.login}
          <br />
          <p>{currentUser.bio}</p>
        </p>
      )}
      {error && <p>エラーが発生しました</p>}
      {isLoading && <p>読み込み中</p>}
    </>
  );
}

export default Profile;
