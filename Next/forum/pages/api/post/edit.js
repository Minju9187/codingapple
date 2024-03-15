import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "POST") {
    let db = (await connectDB).db("forum");
    let newData = { title: request.body.title, content: request.body.content };
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: newData });
    response.status(302).redirect("/list");
  }
}
