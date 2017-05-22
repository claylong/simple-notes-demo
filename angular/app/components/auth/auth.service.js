export class AuthService {
  constructor() {
    'ngInject';
    function storeAuthData(response) {
      authData = response;
      return authData;
    }
    function onSignIn(user) {
      authData = user;
      return auth.$requireSignIn();
    }
    function clearAuthData() {
      authData = null;
    }
  }
  
  $onInit() {
    //var auth = $firebaseAuth();
    this.authData = null;
  }
  login(user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  }
  register(user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  }
  logout() {
    return auth
      .$signOut()
      .then(clearAuthData);
  }
  requireAuthentication() {
    return auth
      .$waitForSignIn().then(onSignIn);
  }
  isAuthenticated() {
    return !!authData;
  }
  getUser() {
    if (authData) {
      return authData;
    }
  }
}