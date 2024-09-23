import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { v4 } from "uuid";

// Config variables
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

export async function POST(request) {
  const body = await request.json();

  try {
    const serviceAccountAuth = new JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

     // Get single sheets in the document by key (sheetId)
    const sheet = doc.sheetsById['993577769'];

    const row = await sheet.addRow({
      Id: v4(),
      Name: body.name,
      Email: body.email,
      Phone: body.phone,
      Website: body.website,
      Budget: body.budget,
      Teamsize: body?.teamsize,
      Message: body?.message
    });

    await sheet.addRow(row);
    console.log("Row added and saved!");
    return new Response(JSON.stringify({message: "success"}), {
      status: 200,
    });
  } catch (e) {
    console.error("Error:", e);
    return new Response(JSON.stringify({ message: e.message }), { status: 500 });
  }
}
