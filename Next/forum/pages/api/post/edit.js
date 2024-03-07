import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "POST") {
    let change = { title: request.body.title, content: request.body.content };
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: change });
    //기존 값에 증감만 해줄수 있도록 $inc
    return response.redirect(302, "/list");
  }
}
