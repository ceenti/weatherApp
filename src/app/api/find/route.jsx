import { searchData } from "../../../utils/fetch";
 
export async function GET(req, res){
  const params = req.nextUrl.searchParams;
  try {
    const info = await searchData(params.get('q'));
    return Response.json({info});
  } catch(error) {
    return res.status(500).json({error})
  }
}
