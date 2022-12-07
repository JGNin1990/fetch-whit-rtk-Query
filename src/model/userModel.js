export class userModel {
  constructor(username, email, token) {
    (this.token = token),
      (this.user = {
        username: username,
        email: email,
      });
  }
}
