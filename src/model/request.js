class Request {
  constructor(requestId, requesterAccName, requesterId , uploadId , requesterAccId, requesterAccPass , status, name) {
    this.requestId = requestId;
    this.requesterAccName = requesterAccName;
    this.requesterId = requesterId;
    this.uploadId = uploadId;
    this.requesterAccId = requesterAccId;
    this.requesterAccPass = requesterAccPass;
    this.status = status;
    this.name = name;
  }
}

export default Request;
