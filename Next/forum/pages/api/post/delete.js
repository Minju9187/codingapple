import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "DELETE") {
    try {
      let db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(request.body) });
    } catch (error) {
      response.status(500);
    }
    response.status(200).json("삭제완료");
  }
}
