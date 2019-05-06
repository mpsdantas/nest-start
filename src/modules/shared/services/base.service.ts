import 'automapper-ts/dist/automapper';
import { Document, Model, Types } from 'mongoose';

 export abstract class BaseService<I>{
    protected model: Model<I & Document>;
    constructor(model: Model<I & Document>){
        this.model = model;
    }

    async findAll(filter = {}): Promise<I[]> {
        return this.model.find(filter).exec();
    }

     async findOne(filter = {}): Promise<I> {
        return this.model.findOne(filter).exec();
    }

     async findById(id: string): Promise<I> {
        return this.model.findById(this.toObjectId(id)).exec();
    }

     async create(item: I): Promise<I> {
        return this.model.create(item);
    }

     async delete(id: string): Promise<I> {
        return this.model.findByIdAndRemove(this.toObjectId(id)).exec();
    }

     async update(id: string, item: Document): Promise<I> {
        return this.model.findByIdAndUpdate(this.toObjectId(id), item, { new: true }).exec();
    }

     private toObjectId(id: string): Types.ObjectId {
        return Types.ObjectId(id);
    }
}