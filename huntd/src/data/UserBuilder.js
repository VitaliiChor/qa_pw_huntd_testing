import { faker } from "@faker-js/faker";

export class UserBuilder {
  constructor() {
    this.user = {
      email: faker.internet.email(),
      password: "Password123",
      repeatPassword: "Password123",
    };
  }

  withEmail(email) {
    this.user.email = email;
    return this;
  }

  withRandomEmail() {
    this.user.email = faker.internet.email();
    return this;
  }

  withPassword(password) {
    this.user.password = password;
    this.user.repeatPassword = password;
    return this;
  }

  withMismatchedPassword() {
    this.user.repeatPassword = this.user.password + "X";
    return this;
  }

  build() {
    return this.user;
  }
}
