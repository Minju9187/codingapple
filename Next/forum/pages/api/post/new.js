import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method == "POST") {
    if (request.body.title == "") {
      return response.status(500).json("제목이 비어있습니다.");
    }
    if (request.body.content == "") {
      return response.status(500).json("내용이 비어있습니다.");
    }
    try {
      const client = await connectDB;
      const db = client.db("forum");
      let result = await db.collection("post").insertOne(request.body);
      return response.status(302).redirect("/list");
    } catch (error) {
      console.error(error);
    }
  }
}
