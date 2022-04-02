declare namespace Express {
  export interface Response {
    originalSend: Send<ResBody, this>;
  }
}
