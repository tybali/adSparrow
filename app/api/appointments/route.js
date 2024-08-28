import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { v4 } from "uuid";

// Config variables
const SPREADSHEET_ID = "1hZtMZxWi5ZsbZkTkhWvEarTxPDQNVyvWuFqQLjeR8Cw";
const GOOGLE_CLIENT_EMAIL = "consultations@adsparrow.iam.gserviceaccount.com";
const GOOGLE_SERVICE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCx3nJOdab/7vL2\nBKumXCyULQnKTJEcg+z3L8lKPBfbeY0J/3Ox6UW27eTQ78sKgsZhlAN1NjR9Qmyw\nEBPzudxUbDkJb94KL8deJb6HZ3uBhhQwUqp79REmbPT1vGyusvqyOywUFWvzdEzr\n50sMfiQcHtIoM/3TZrA/NlGy/N/T0sIYa6gLRJK9JAsQYE258ih2P5rTkKJ1IH9f\n9RkVjS5L287Ml/HixK8R78v6qSE0jdrw0AneKFWCpd+PVQJhXrPKh1LEV5nzoeWA\neANkveQcIxuRAVhUPGetXRQe5bv921TULnJZvWeMynT8P+8OStkEvp0bkOJFDplW\n3bKI+6WjAgMBAAECgf8tEQy2vS/kelUsRkh9Xjp486qTAAHy/Xov4Wu2QIOcaccY\nWKzUz91aE2DyGxWRFDReEItbYZq8fyOtpvDbleqO7cWF2MajttR7bv2F9DJLNlws\n+X84uo3AxfHWrpXDrdti2PhdwT5HZWp1FUhXYfus9cUbPBEfoggF/CYUP1sxFdTI\nnC4/iln7fEsOJvI866UrsTTGgmEZ+vNZdaGmh6JtTDvE5H50i9PP3imRTz8tIMqe\nu8iK0mS+mrLMEyMj8aqdVAWd70l94r6Bx07pNzx+rEs0c8FQfz67JFF4I+RqBZMB\nfDHfbJDRUuqGihhuHYkRuObNRvjP2FzfOZ9M4d0CgYEA4enjSeLyUSDfvfSRMMvG\n0WO/WBKJzGB9p9OStPkO/fZ9kqMwX1ZOm8nypsr+v+zwGL4B7cIueRW8fBWFBQ2H\nL1wlnSC4TWiasPwOnii+bOCmzrI+UaxA7hpq8gAW1zW8W6mWhV6Bptmyc0pEa+ZR\n/0iRnhmFu9WYiRjItyqJZ7cCgYEAyY6QCx4evAx+xgpxpBdrIOStxo8zbwcyg12O\nxxAyE3EVTgRPZFOc9yMo1wtb0aNsX0SlaLMmyMnZG+0pxIGgTr1WaC02MTTGDMF/\nHUP53Hpz/EOwWNgkUnZUbZERo0Q+l9L+G6W61GBKCGOU9TGLjdbJL+Ng5dwAOkLw\nDH2kuXUCgYEAwrMyoiEnuefdLPc0kpttNFUFOcBwZmXapeNgEvx7gUEIpHJkZCYc\nBYQczscwmvR3ULuhKeoq50xmb4KUa/Bmy9hcynjCnmRCvbneV0zCIU/UM1vG/di4\n9PxrozmUddHoDg+wnC0BDG2esGIXae7MSHmglmNksKe7mJx1j/bnCS0CgYBFBdAo\nLoFh7nl/glYWVnq2QfmMlL+NVw6iU+iwHMi5RbGBDRLPDZ8kNuMmeVpROUDEgzKN\n30P54L27xYTXKXjnXgl4FXuIcEUeWykXsY6gRULw8ZEza5lMr/8LonFC0v0IaxXg\nC+omDm9r3gZFzVi4EwTEpH4rWSKu0Pt5m5FMfQKBgQCSTN3OOlxzodrul3cfBTBL\n3Yrtelm8iCIM3WSabckZR4XBbkGqetPA2YTe1Igf9ahJu2JoQHOLwJWC3gKs99fV\n5wO5f4tON3LI6TYHYXhVhy4Uvxp+41bDZy2VW+ig8ripjFz5kHNWuuzf3Z5ER6kh\nku43adWBBXKbV8UurU3qqg==\n-----END PRIVATE KEY-----\n";

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
    const sheet = doc.sheetsById['0'];

    const row = await sheet.addRow({
      Id: v4(),
      Name: body.name,
      Email: body.email,
      Phone: body.phone,
      Website: body.website,
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
