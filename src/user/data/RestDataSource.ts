import axios from 'axios';

export class RestDataSource {
  getUsers(): Promise<any> {
    return axios.get('http://localhost:8080/users/');
  }

  searchUsers(term: String): Promise<any> {
    return axios.get(`http://localhost:8080/users/search/findAllByUsernameContains?search=${term}`);
  }

  createUser(user: any): Promise<any> {
    console.log(user);
  //  var body = {"user": {"username":user.username, "partnerid" : "1"} };
    var body = { "username":user.value.username, "partnerid" : "1"};
    return axios.post(`http://localhost:8080/users/`, body);
  }
}
