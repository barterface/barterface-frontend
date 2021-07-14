class Request {
  constructor(id, accId, accName, accPassword, uploadId, requesterId) {
    this.id = id;
    this.accId = accId;
    this.accName = accName;
    this.accPassword = accPassword;
    this.uploadId = uploadId;
    this.requesterId = requesterId;
  }
}

export default Request;
