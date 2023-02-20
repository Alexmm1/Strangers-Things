const BaseUrl =
  "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-FT/posts";

export const fetchPost = async () => {
  try {
    const response = await fetch(BaseUrl);
    const result = await response.json();
    console.log(result);
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};
