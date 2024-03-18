import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);

  console.log(session);
  if (session) {
    request.body.author = session.user.email;
  }
  if (request.method == "POST") {
    if (request.body.title == "") {
      return response.status(500).json("제목이 비어있습니다");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(request.body);
    response.status(302).redirect("/list");
  }
}
