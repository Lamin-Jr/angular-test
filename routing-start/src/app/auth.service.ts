export class AuthService {
  loggedIn = false;

  isAuthenticated = () => {
    const promise = new Promise((resolve, rejected) => {
      setTimeout(() => resolve(this.loggedIn), 800);
    });

    return promise;
  };

  logIn(): void {
    this.loggedIn = true;
  }
  logOut(): void {
    this.loggedIn = false;
  }
}
