export class BaseModel {
    createdAt: Date;
    updatdedAt: Date;
    deletedAt: Date;
    constructor() {
        this.createdAt = new Date();
        this.updatdedAt = new Date();
        this.deletedAt = new Date();
    }
}

export default BaseModel;