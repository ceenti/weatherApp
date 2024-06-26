import { fetchMainData } from "../../../utils/fetch";
 
export async function GET(req, res){
  const params = req.nextUrl.searchParams;
  try {
    const info = await fetchMainData({latitude: params.get('lat'), longitude: params.get('long')});
    return Response.json({info});
  } catch(error) {
    return res.status(500).json({error})
  }
}
