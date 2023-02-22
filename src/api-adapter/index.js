const BaseUrl = "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-FT";
export const fetchPost = async () => {
  try {
    const response = await fetch(`${BaseUrl}/posts`);
    const result = await response.json();

    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const postRegister = async (username, password) => {
  try {
    const response = await fetch(`${BaseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (username, password) => {
  try {
    const response = await fetch(`${BaseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const PostForm = async (title, description, price) => {
  try {
    const response = await fetch(`${BaseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: true,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`${BaseUrl}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
