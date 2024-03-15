import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method == "POST") {
    if (request.body.title == "") {
      return response.status(500).json("제목이 비어있습니다");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(request.body);
    response.status(302).redirect("/list");
  }
}
