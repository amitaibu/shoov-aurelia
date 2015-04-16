import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class LoginApi {
  baseUri = 'http://localhost/shoov/www'

  // 'Authorization': 'Basic ' + Utils.Base64.encode(user.username + ':' + user.password)
  code = 'YWRtaW46YWRtaW4=';

  constructor(http){
    this.http = http;
  }

  login(credentials) {
    this.http
    .configure(x => {
      x.withBaseUri(this.baseUri);
      x.withHeader('Authorization', 'Basic YWRtaW46YWRtaW4=');
    })
    .get('api/login-token')
      .then(response => {
        log(response);
      });
  }

  ///////

  getContactList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(x =>  { return {
          id:x.id,
          firstName:x.firstName,
          lastName:x.lastName,
          email:x.email
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getContactDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(x => x.id == contact.id)[0];

        if(found){
          let index = contacts.indexOf(found);
          contacts[index] = instance;
        }else{
          instance.id = getId();
          contacts.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}
