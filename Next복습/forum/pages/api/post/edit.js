import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method === "POST") {
    let data = { title: request.body.title, content: request.body.content };
    console.log(data);
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: data });
    response.status(200).redirect("/list");
  }
}
