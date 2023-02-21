const BaseUrl =
  "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-FT/posts";

export const fetchPost = async () => {
  try {
    const response = await fetch(BaseUrl);
    const result = await response.json();

    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = async (usename, password) => {
  try {
    const response = await fetch(BaseUrl, {
      method: "POST",
      headres: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: "username",
          password: "password",
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {}
};
