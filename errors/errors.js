export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

export class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}