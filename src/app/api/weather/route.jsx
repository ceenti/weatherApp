import { fetchMainData } from "../../../utils/fetch";

 
export async function GET(req){
  const params = req.nextUrl.searchParams;
  console.log()
  const info = await fetchMainData({latitude: params.get('lat'), longitude: params.get('long')});
  console.log(info);
  return Response.json({info});
}
