class Upload {
  constructor(uploadId, accName, accId, accPass, startTime, endTime, uploaderId, status, reqId, name) {
    this.uploadId = uploadId;
    this.accName = accName;
    this.accId = accId;
    this.accPass = accPass;
    this.startTime = startTime;
    this.endTime = endTime;
    this.uploaderId = uploaderId;
    this.status = status;
    this.reqId = reqId;
    this.name = name;
  }
}

export default Upload;
