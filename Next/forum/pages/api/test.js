import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  console.log(request.query);
  return response.status(200).redirect("/list");
}
