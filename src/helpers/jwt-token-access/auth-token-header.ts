export default function authHeader() {
  const obj: any = localStorage.getItem("authUser");

  if (obj && obj.accessToken) {
    return { Authorization: obj.accessToken };
  } else {
    return {};
  }
}
